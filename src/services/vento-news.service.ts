import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VentoNews } from 'src/entities/vento-news.entity';
import { CardResponseDTO } from 'src/dto/home-card-response.dto';

@Injectable()
export class VentoNewsService {
    constructor(
        @InjectRepository(VentoNews)
        private articuloBynRepository: Repository<VentoNews>,
    ) { }

    async obtenerArticulos(): Promise<CardResponseDTO[]> {
        const articulos = await this.articuloBynRepository.find();

        if (articulos.length === 0) {
            throw new NotFoundException('No se encontraron artículos');
        }

        return articulos.map(articulo => ({
            id: articulo.id,
            titulo: articulo.titulo,
            imagen: articulo.imagen
        }));
    }
}
