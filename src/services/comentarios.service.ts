import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from '../entities/comentario.entity';
import { ComentarioClienteResponseDTO } from 'src/dto/comentario-cliente-response.dto';

@Injectable()
export class ComentariosService {
    constructor(
        @InjectRepository(Comentario)
        private comentariosRepository: Repository<Comentario>,
    ) { }

    async obtenerComentariosDelProducto(productoId: number): Promise<ComentarioClienteResponseDTO[]> {
        const comentarios = await this.comentariosRepository.find({
            where: { producto: { id: productoId } },
            take: 2,
            relations: ['producto', 'calificacion'],
        });

        if (!comentarios.length) {
            throw new NotFoundException(`No se encontraron comentarios para el producto con ID ${productoId}.`);
        }

        return comentarios.map(comentario => this.transformarAComentarioDto(comentario));
    }

    private transformarAComentarioDto(comentario: Comentario): ComentarioClienteResponseDTO {
        return {
            productoId: comentario.producto ? comentario.producto.id : null,
            nombreCliente: comentario.nombreCliente,
            estrellas: comentario.estrellas,
            titulo: comentario.titulo,
            comentario: comentario.comentario,
            calificaciones: comentario.calificacion ? {
                caracteristicas: comentario.calificacion.caracteristicas,
                sonido: comentario.calificacion.sonido,
                fabricacion: comentario.calificacion.fabricacion,
            } : null,
            reacciones: {
                MeGusta: comentario.megusta,
                NoMeGusta: comentario.nomegusta,
                Denunciar: comentario.denuncias
            },

        };
    }
}

