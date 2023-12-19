import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../entities/producto.entity';
import { ProductoDetalleResponseDTO } from '../dto/producto-detalle-response.dto';
import { ProductoMapper } from 'src/mappers/producto.mapper';
import { CrearProductoDTO } from 'src/dto/crear-producto.dto';
import { ActualizarProductoDTO } from 'src/dto/actualizar-producto.dto';
import { Categoria } from '../entities/categoria.entity';
import { Subcategoria } from '../entities/subcategoria.entity';
import { Marca } from '../entities/marca.entity';
import { ImagenProducto } from 'src/entities/imagen-producto.entity';
import { DestacadoCardResponseDTO } from 'src/dto/destacado-card-response.dto';
import { ProductoCatalogoSubcategoriaResponseDTO } from 'src/dto/producto-catalogo-subcategoria.dto';
import { promises as fs } from 'fs';
import { DetalleProductoDto } from 'src/dto/detalle-producto.dto';
import { DetalleProducto } from 'src/entities/detalle-producto.entity';
import { DetalleProductoMapper } from 'src/mappers/detalle-producto.mapper';
import { ImagenesService } from './imagenes.service';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
        @InjectRepository(Subcategoria)
        private subcategoriaRepository: Repository<Subcategoria>,
        @InjectRepository(Marca)
        private marcaRepository: Repository<Marca>,
        @InjectRepository(ImagenProducto)
        private imagenProductoRepository: Repository<ImagenProducto>,
        @InjectRepository(DetalleProducto)
        private detalleProductoRepository: Repository<DetalleProducto>,
        private readonly imagenesService: ImagenesService
    ) { }

    async obtenerDetalleProducto(id: number): Promise<ProductoDetalleResponseDTO> {
        console.log(`Buscando producto con ID: ${id}`);
        const producto = await this.productoRepository.findOne({
            where: { id },
            relations: ['categoria', 'marca', 'imagenes', 'detalleProducto'],
        });

        if (!producto) {
            throw new NotFoundException('Producto no encontrado');
        }
        console.log('Producto encontrado:', producto);

        const productoDTO = ProductoMapper.toDto(producto);


        if (producto.imagenes && producto.imagenes.length > 0) {
            productoDTO.imagenes = await Promise.all(producto.imagenes.map(async imagenProducto => {
                try {
                    const base64Data = await this.imagenesService.leerArchivo(imagenProducto.imagen);
                    return {
                        nombre: imagenProducto.nombreImagen,
                        base64: base64Data
                    };
                } catch (error) {
                    console.error('Error al leer y convertir archivo de imagen:', error);
                    return {
                        nombre: imagenProducto.nombreImagen,
                        base64: 'Imagen no disponible'
                    };
                }
            }));
        } else {
            productoDTO.imagenes = [];
        }


        if (producto.detalleProducto) {
            productoDTO.detalle = DetalleProductoMapper.toDto(producto.detalleProducto);
        } else {
            productoDTO.detalle = null;
        }

        return productoDTO;
    }

    async crearProducto(crearProductoDto: CrearProductoDTO): Promise<ProductoDetalleResponseDTO> {
        let productoGuardado;


        try {
            const nuevoProducto = await ProductoMapper.toEntity(
                crearProductoDto,
                this.categoriaRepository,
                this.subcategoriaRepository,
                this.marcaRepository
            );
            productoGuardado = await this.productoRepository.save(nuevoProducto);
        } catch (error) {
            console.error('Error al guardar el producto:', error);
            throw new InternalServerErrorException('No se pudo guardar el producto');
        }


        if (crearProductoDto.detalles) {
            try {
                const detallesProducto = new DetalleProducto();
                Object.assign(detallesProducto, crearProductoDto.detalles);
                detallesProducto.producto = productoGuardado;
                await this.detalleProductoRepository.save(detallesProducto);
            } catch (error) {
                console.error('Error al guardar los detalles del producto:', error);
                throw new InternalServerErrorException('No se pudieron guardar los detalles del producto');
            }
        }


        if (crearProductoDto.imagenes) {
            try {
                for (const imagen of crearProductoDto.imagenes) {
                    const nombreImagen = `${Date.now()}-${imagen.nombre}`;
                    const base64Data = imagen.base64.split(';base64,').pop();
                    const ruta = `/imagenes-producto/${nombreImagen}`;

                    console.log('Guardando imagen en:', ruta);
                    const buffer = Buffer.from(base64Data, 'base64');
                    await fs.writeFile('../front-ventoverso/public' + ruta, buffer);

                    const imagenProducto = new ImagenProducto();
                    imagenProducto.imagen = ruta;
                    imagenProducto.nombreImagen = nombreImagen;
                    imagenProducto.producto = productoGuardado;
                    await this.imagenProductoRepository.save(imagenProducto);
                }
            } catch (error) {
                console.error('Error al guardar imágenes:', error);
                throw new InternalServerErrorException('No se pudieron guardar las imágenes');
            }
        }

        try {
            const productoCompleto = await this.productoRepository.findOne({
                where: { id: productoGuardado.id },
                relations: ['categoria', 'marca', 'imagenes', 'detalleProducto']
            });

            if (!productoCompleto) {
                throw new NotFoundException(`Producto con ID ${productoGuardado.id} no encontrado`);
            }

            return ProductoMapper.toDto(productoCompleto);
        } catch (error) {
            console.error('Error al recuperar el producto completo:', error);
            throw new InternalServerErrorException('No se pudo recuperar el producto completo');
        }
    }


    async actualizarProducto(id: number, actualizarProductoDto: ActualizarProductoDTO): Promise<ProductoDetalleResponseDTO> {
        console.log('Iniciando actualización de producto. ID:', id, 'Datos:', actualizarProductoDto);

        try {
            let producto = await this.productoRepository.findOne({ where: { id }, relations: ['imagenes', 'detalleProducto'] });
            console.log('Producto encontrado para actualizar:', producto);

            if (!producto) {
                throw new NotFoundException(`Producto con ID ${id} no encontrado`);
            }

            const { imagenes, detalles, ...actualizarProductoInfo } = actualizarProductoDto;
            producto = this.productoRepository.merge(producto, actualizarProductoInfo);
            await this.productoRepository.save(producto);


            if (detalles && producto.detalleProducto) {
                const detalleProducto = await this.detalleProductoRepository.findOne({ where: { producto: { id } } });
                if (detalleProducto) {
                    this.detalleProductoRepository.merge(detalleProducto, detalles);
                    await this.detalleProductoRepository.save(detalleProducto);
                }
            }

            if (imagenes && imagenes.length > 0) {
                for (const imagenDto of imagenes) {
                    console.log('Procesando imagen:', imagenDto.nombre);

                    const nombreImagen = `${Date.now()}-${imagenDto.nombre}`;
                    const rutaImagen = `../front-ventoverso/public/imagenes-producto/${nombreImagen}`;
                    await fs.writeFile(rutaImagen, imagenDto.base64, 'base64');

                    const imagenProducto = new ImagenProducto();
                    imagenProducto.imagen = rutaImagen;
                    imagenProducto.nombreImagen = nombreImagen;
                    imagenProducto.producto = producto;
                    await this.imagenProductoRepository.save(imagenProducto);
                    console.log('Imagen guardada:', imagenProducto);
                }
            }


            const productoCompleto = await this.productoRepository.findOne({
                where: { id },
                relations: ['categoria', 'marca', 'imagenes', 'detalleProducto']
            });

            if (!productoCompleto) {
                throw new NotFoundException(`Producto con ID ${id} no encontrado`);
            }

            return ProductoMapper.toDto(productoCompleto);
        } catch (error) {
            console.error('Error al actualizar producto. ID:', id, 'Error:', error);
            throw new InternalServerErrorException('Error al actualizar producto');
        }
    }

    async actualizarDetalleProducto(id: number, detalleProductoDto: DetalleProductoDto): Promise<void> {

        const producto = await this.productoRepository.findOne({ where: { id } });
        if (!producto) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }


        const detalleProducto = await this.detalleProductoRepository.findOne({
            where: { producto: producto },
        });
        if (!detalleProducto) {
            throw new NotFoundException(`Detalle de producto para el producto ID ${id} no encontrado`);
        }


        const detalleActualizado = this.detalleProductoRepository.merge(detalleProducto, detalleProductoDto);


        await this.detalleProductoRepository.save(detalleActualizado);
    }

    async eliminarProducto(id: number): Promise<void> {
        try {
            const producto = await this.productoRepository.findOne({ where: { id } });

            if (!producto) {
                throw new NotFoundException(`Producto con ID ${id} no encontrado`);
            }

            await this.productoRepository.manager.transaction(async entityManager => {
                await entityManager.delete(ImagenProducto, { producto: { id } });
                await entityManager.delete(Producto, { id });
            });

        } catch (error) {
            if (error instanceof NotFoundException) {

                throw error;
            }

            console.error(`Error al eliminar producto con ID: ${id}`, error);
            throw new InternalServerErrorException('Error al eliminar producto');
        }
    }

    async obtenerProductosDestacados(): Promise<DestacadoCardResponseDTO[]> {
        try {
            console.log("Iniciando obtenerProductosDestacados");

            const productosDestacados = await this.productoRepository.find({
                where: { estrellas: 5 },
                take: 5
            });

            console.log("Productos destacados encontrados:", productosDestacados);

            return productosDestacados.map(producto => {
                const resultado = {
                    id: producto.id,
                    imagenUrl: producto.imagenes.length > 0 ? producto.imagenes[0].imagen : '',
                    estrellas: producto.estrellas,
                    nombre: producto.nombre,
                    precio: producto.precio,
                };

                console.log("Resultado mapeado:", resultado);
                return resultado;
            });
        } catch (error) {
            console.error("Error al obtener productos destacados:", error);
            throw new InternalServerErrorException('Descripción del error');
        }
    }

    async obtenerProductosPorCategoria(idCategoria: number): Promise<ProductoCatalogoSubcategoriaResponseDTO[]> {
        const productos = await this.productoRepository.find({
            where: { categoria: { id: idCategoria } },
            relations: ['categoria', 'subcategoria', 'marca', 'imagenes'],
        });

        if (!productos || productos.length === 0) {
            throw new NotFoundException(`No se encontraron productos para la categoría con ID ${idCategoria}`);
        }

        return productos.map(producto => ProductoMapper.toCatalogoSubcategoriaDto(producto));
    }
}

















