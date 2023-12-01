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
    ) { }

    async obtenerDetalleProducto(id: number): Promise<ProductoDetalleResponseDTO> {
        const producto = await this.productoRepository.findOne({
            where: { id },
            relations: ['categoria', 'marca', 'imagenes'],
        });

        if (!producto) {
            throw new NotFoundException('Producto no encontrado');
        }

        return ProductoMapper.toDto(producto);
    }


    async crearProducto(crearProductoDto: CrearProductoDTO): Promise<ProductoDetalleResponseDTO> {
        try {
            const nuevoProducto = await ProductoMapper.toEntity(
                crearProductoDto,
                this.categoriaRepository,
                this.subcategoriaRepository,
                this.marcaRepository
            );

            let productoGuardado;


            await this.productoRepository.manager.transaction(async entityManager => {
                productoGuardado = await entityManager.save(nuevoProducto);

                if (crearProductoDto.imagenes) {
                    for (const imagen of crearProductoDto.imagenes) {
                        const nombreImagen = imagen.nombre || `${Date.now()}-imagen.png`;
                        const base64Data = imagen.base64.split(';base64,').pop();
                        const ruta = `/imagenes-producto/${nombreImagen}`;

                        console.log('Guardando imagen en:', ruta);
                        const buffer = Buffer.from(base64Data, 'base64');
                        await fs.writeFile('../front-ventoverso/public' + ruta, buffer);

                        const imagenProducto = new ImagenProducto();
                        imagenProducto.imagen = ruta;
                        imagenProducto.nombreImagen = nombreImagen;
                        imagenProducto.producto = productoGuardado;
                        await entityManager.save(imagenProducto);
                    }
                }

            });


            const productoCompleto = await this.productoRepository.findOne({
                where: { id: productoGuardado.id },
                relations: ['imagenes']
            });


            if (!productoCompleto) {
                throw new NotFoundException(`Producto con ID ${productoGuardado.id} no encontrado`);
            }


            return ProductoMapper.toDto(productoCompleto);
        } catch (error) {
            console.error('Error al crear producto:', error);
            throw new InternalServerErrorException('No se pudo crear el producto');
        }
    }

    async actualizarProducto(id: number, actualizarProductoDto: ActualizarProductoDTO): Promise<ProductoDetalleResponseDTO> {

        let producto = await this.productoRepository.findOne({ where: { id }, relations: ['imagenes'] });

        if (!producto) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }

        const { imagenes, ...actualizarProductoInfo } = actualizarProductoDto;
        producto = this.productoRepository.merge(producto, actualizarProductoInfo);
        await this.productoRepository.save(producto);

        if (imagenes && imagenes.length > 0) {
            for (const imagenDto of imagenes) {
                const imagenProducto = new ImagenProducto();
                const nombreImagen = `${Date.now()}-${imagenDto.nombre}`;
                const rutaImagen = `imagenes/${nombreImagen}`;
                await fs.writeFile(rutaImagen, imagenDto.base64, 'base64');
                imagenProducto.imagen = rutaImagen;
                imagenProducto.nombreImagen = nombreImagen;
                imagenProducto.producto = producto;
                await this.imagenProductoRepository.save(imagenProducto);
            }
            producto = await this.productoRepository.findOne({ where: { id }, relations: ['imagenes'] });

            return ProductoMapper.toDto(producto);
        }
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

















