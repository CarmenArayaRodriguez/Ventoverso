import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../entities/producto.entity';
import { DestacadoCardResponseDTO } from '../dto/destacado-card-response.dto';

@Injectable()
export class ProductosRelacionadosService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
    ) { }

    async obtenerProductosRelacionados(idCategoria: number): Promise<DestacadoCardResponseDTO[]> {
        const productosRelacionados = await this.productoRepository.createQueryBuilder("producto")
            .leftJoinAndSelect("producto.imagenes", "imagen")
            .where("producto.categoria.id = :idCategoria", { idCategoria })
            .andWhere("producto.estrellas = :estrellas", { estrellas: 5 })
            .limit(5)
            .getMany();

        if (productosRelacionados.length === 0) {
            throw new NotFoundException('No se encontraron productos relacionados');
        }

        return productosRelacionados.map(producto => ({
            id: producto.id,
            imagenUrl: producto.imagenes.length > 0 ? producto.imagenes[0].imagen : '',
            estrellas: producto.estrellas,
            nombre: producto.nombre,
            precio: producto.precio,
        }));
    }
}
