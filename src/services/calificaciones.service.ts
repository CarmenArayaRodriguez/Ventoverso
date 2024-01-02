import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calificacion } from '../entities/calificacion.entity';
import { Comentario } from 'src/entities/comentario.entity';
import { CalificacionesPromedioDTO } from 'src/dto/calificaciones-promedio.dto';
import { Producto } from 'src/entities/producto.entity';

@Injectable()
export class CalificacionesService {
    private readonly logger = new Logger(CalificacionesService.name);

    constructor(
        @InjectRepository(Calificacion)
        private calificacionesRepository: Repository<Calificacion>,
        @InjectRepository(Comentario)
        private comentariosRepository: Repository<Comentario>,
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>,
    ) { }

    async obtenerCalificacionesPromedio(productoId: number): Promise<CalificacionesPromedioDTO> {
        try {
            this.logger.log(`Buscando producto con ID: ${productoId}`);

            const productoExiste = await this.productoRepository.findOne({ where: { id: productoId } });
            if (!productoExiste) {
                this.logger.log(`Producto con ID ${productoId} no encontrado`);
                throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
            }
            this.logger.log(`Producto encontrado:`, productoExiste);

            const calificaciones = await this.calificacionesRepository.find({ where: { producto: { id: productoId } } });
            const totalCalificaciones = calificaciones.length;

            const estrellasPromedioDTO = await this.obtenerEstrellasPromedio(productoId);

            if (totalCalificaciones === 0) {
                return {
                    promedioGeneral: 0,
                    promedioCaracteristicas: 0,
                    promedioSonido: 0,
                    promedioFabricacion: 0,
                    promedioEstrellas: estrellasPromedioDTO.promedioEstrellas
                };
            }

            const sumaCalificaciones = calificaciones.reduce((acumulador, calificacion) => {
                acumulador.caracteristicas += calificacion.caracteristicas;
                acumulador.sonido += calificacion.sonido;
                acumulador.fabricacion += calificacion.fabricacion;
                return acumulador;
            }, { caracteristicas: 0, sonido: 0, fabricacion: 0 });

            return {
                promedioGeneral: (sumaCalificaciones.caracteristicas + sumaCalificaciones.sonido + sumaCalificaciones.fabricacion) / (3 * totalCalificaciones),
                promedioCaracteristicas: sumaCalificaciones.caracteristicas / totalCalificaciones,
                promedioSonido: sumaCalificaciones.sonido / totalCalificaciones,
                promedioFabricacion: sumaCalificaciones.fabricacion / totalCalificaciones,
                promedioEstrellas: estrellasPromedioDTO.promedioEstrellas
            };
        } catch (error) {
            if (error.response === 'Producto no encontrado') {
                throw error;
            } else {
                this.logger.error('Error en obtenerCalificacionesPromedio:', error);
                throw new HttpException('Error al obtener calificaciones promedio', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    async obtenerEstrellasPromedio(productoId: number): Promise<CalificacionesPromedioDTO> {
        try {
            const comentarios = await this.comentariosRepository.find({ where: { id_producto: productoId } });
            this.logger.log('Comentarios:', comentarios);
            const totalComentarios = comentarios.length;
            if (totalComentarios === 0) {
                return {
                    promedioEstrellas: 0,
                    promedioGeneral: 0,
                    promedioCaracteristicas: 0,
                    promedioSonido: 0,
                    promedioFabricacion: 0
                };
            }

            const sumaEstrellas = comentarios.reduce((acum, comentario) => acum + comentario.estrellas, 0);
            const promedioEstrellas = sumaEstrellas / totalComentarios;
            this.logger.log('Suma de estrellas:', sumaEstrellas);
            this.logger.log('Promedio de estrellas:', promedioEstrellas);
            return {
                promedioEstrellas,
                promedioGeneral: 0,
                promedioCaracteristicas: 0,
                promedioSonido: 0,
                promedioFabricacion: 0
            };
        } catch (error) {
            this.logger.error('Error en obtenerEstrellasPromedio:', error);
            throw new HttpException('Error al obtener estrellas promedio', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
