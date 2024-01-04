import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from 'src/entities/producto.entity';
import { Subcategoria } from 'src/entities/subcategoria.entity';
import { ProductoCatalogoSubcategoriaResponseDTO } from 'src/dto/producto-catalogo-subcategoria.dto';
import { CatalogoSubcategoriaMapper } from 'src/mappers/catalogo-subcategoria.mapper';

@Injectable()
export class CatalogoSubcategoriaService {
    private readonly logger = new Logger(CatalogoSubcategoriaService.name);

    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
        @InjectRepository(Subcategoria)
        private subcategoriaRepository: Repository<Subcategoria>,

    ) { }

    async obtenerProductosPaginados(pagina: number = 1, limite: number = 16): Promise<any> {
        this.logger.debug("Inicio de obtenerProductosPaginados en el Servicio");

        pagina = pagina > 0 ? pagina : 1;
        limite = limite > 0 ? limite : 16;
        this.logger.debug(`Valores recibidos - Página: ${pagina}, Límite: ${limite}`);

        const totalProductos = await this.productoRepository.count();
        this.logger.debug(`Total de Productos: ${totalProductos}`);

        let totalPaginas = parseInt((totalProductos / limite).toString());
        if (totalProductos % limite !== 0) {
            totalPaginas++;
        }
        this.logger.debug(`Total de Páginas: ${totalPaginas}`);

        const productos = await this.productoRepository.find({
            take: limite,
            skip: (pagina - 1) * limite,
            relations: ['imagenes'],

        });
        this.logger.debug(`Productos encontrados: ${productos.length}`);

        return {
            datos: productos,
            paginaActual: pagina,
            limitePorPagina: limite,
            totalPaginas,
            totalProductos,
        };
    }
    async obtenerProductos(): Promise<ProductoCatalogoSubcategoriaResponseDTO[]> {
        this.logger.log("Inicio de obtenerProductos");
        this.logger.log("Consultando subcategoría con ID 2");
        const subcategoriaObj = await this.subcategoriaRepository.findOne({ where: { id: 2 } });
        this.logger.log("Subcategoría obtenida:", subcategoriaObj);
        this.logger.log("Subcategoría obtenida:", subcategoriaObj);
        if (!subcategoriaObj) {
            throw new NotFoundException("Subcategoría no encontrada");;
        }

        this.logger.log("Consultando productos de la subcategoría");
        const productos = await this.productoRepository.find({
            where: { subcategoria: subcategoriaObj },
            relations: ['imagenes'],
            take: 16
        });
        this.logger.log("Productos encontrados:", productos);
        if (!productos || productos.length === 0) {
            return [];
        }

        return productos.map(CatalogoSubcategoriaMapper.toDto) || [];
    }

}
