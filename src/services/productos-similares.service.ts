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

    // async obtenerProductosSimilares(idSubcategoria: number): Promise<DestacadoCardResponseDTO[]> {
    //     try {
    //         const productosSimilares = await this.productoRepository.find({
    //             where: {
    //                 subcategoria: { id: idSubcategoria },
    //                 estrellas: 5
    //             },
    //             take: 5,
    //             relations: ['imagenes']
    //         });

    //         return productosSimilares.map(producto => ({
    //             id: producto.id,
    //             imagenUrl: producto.imagenes.length > 0 ? producto.imagenes[0].imagen : '',
    //             estrellas: producto.estrellas,
    //             nombre: producto.nombre,
    //             precio: producto.precio,
    //         }));
    //     } catch (error) {
    //         console.error("Error al obtener productos similares:", error);
    //         throw new InternalServerErrorException('Error al obtener productos similares');
    //     }
    // }

    async obtenerProductosSimilares(idSubcategoria: number): Promise<DestacadoCardResponseDTO[]> {
        // Primero, verifica si la subcategoría existe
        const subcategoriaExistente = await this.subcategoriaRepository.findOne({
            where: { id: idSubcategoria }
        });
        if (!subcategoriaExistente) {
            throw new NotFoundException(`Subcategoría con ID ${idSubcategoria} no encontrada`);
        }

        // // Luego, busca los productos
        // const productos = await this.productoRepository.find({
        //     // ...tu consulta existente...
        // });

        // // Si no se encuentran productos, puedes decidir lanzar un error o simplemente devolver un array vacío
        // if (!productos || productos.length === 0) {
        //     throw new NotFoundException(`No se encontraron productos para la subcategoría con ID ${idSubcategoria}`);
        // }

        // return productos.map(producto => ProductoMapper.toCatalogoSubcategoriaDto(producto));
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

