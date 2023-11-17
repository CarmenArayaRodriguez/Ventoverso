import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from 'src/entities/producto.entity';
import { Subcategoria } from 'src/entities/subcategoria.entity';
import { ProductoCatalogoSubcategoriaResponseDTO } from 'src/dto/producto-catalogo-subcategoria.dto';
import { CatalogoSubcategoriaMapper } from 'src/mappers/catalogo-subcategoria.mapper';

@Injectable()
export class CatalogoSubcategoriaService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
        @InjectRepository(Subcategoria)
        private subcategoriaRepository: Repository<Subcategoria>,
    ) { }

    async obtenerProductos(): Promise<ProductoCatalogoSubcategoriaResponseDTO[]> {
        console.log("Inicio de obtenerProductos");
        console.log("Consultando subcategoría con ID 2");
        const subcategoriaObj = await this.subcategoriaRepository.findOne({ where: { id: 2 } });
        console.log("Subcategoría obtenida:", subcategoriaObj);
        console.log("Subcategoría obtenida:", subcategoriaObj);
        if (!subcategoriaObj) {
            throw new NotFoundException("Subcategoría no encontrada");;
        }

        console.log("Consultando productos de la subcategoría");
        const productos = await this.productoRepository.find({
            where: { subcategoria: subcategoriaObj },
            relations: ['imagenes'],
            take: 16
        });
        console.log("Productos encontrados:", productos);
        if (!productos || productos.length === 0) {
            return [];
        }

        return productos.map(CatalogoSubcategoriaMapper.toDto) || [];
    }

}
