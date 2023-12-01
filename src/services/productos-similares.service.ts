import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DestacadoCardResponseDTO } from "src/dto/destacado-card-response.dto";
import { Producto } from "src/entities/producto.entity";
import { ProductoMapper } from "src/mappers/producto.mapper";
import { Repository } from "typeorm";
import { Subcategoria } from "src/entities/subcategoria.entity";

@Injectable()
export class ProductosSimilaresService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
        @InjectRepository(Subcategoria)
        private readonly subcategoriaRepository: Repository<Subcategoria>,
    ) { }


    async obtenerProductosSimilares(idSubcategoria: number): Promise<DestacadoCardResponseDTO[]> {

        const subcategoriaExistente = await this.subcategoriaRepository.findOne({
            where: { id: idSubcategoria }
        });
        if (!subcategoriaExistente) {
            throw new NotFoundException(`Subcategoría con ID ${idSubcategoria} no encontrada`);
        }

        const productos = await this.productoRepository.find({
            where: { subcategoria: { id: idSubcategoria }, estrellas: 5 },
            take: 5,
            relations: ['imagenes']
        });

        if (!productos || productos.length === 0) {
            throw new NotFoundException(`No se encontraron productos para la subcategoría con ID ${idSubcategoria}`);
        }

        return productos.map(producto => ProductoMapper.toCatalogoSubcategoriaDto(producto));
    }
}

