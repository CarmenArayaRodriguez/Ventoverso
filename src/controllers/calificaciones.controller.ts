import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { CalificacionesService } from '../services/calificaciones.service';
import { CalificacionesPromedioDTO } from 'src/dto/calificaciones-promedio.dto';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('calificaciones')
export class CalificacionesController {
    constructor(private calificacionesService: CalificacionesService) { }

    @Get(':productoId/promedio')
    @ApiOkResponse({
        description: 'Promedio obtenido con éxito',
        type: CalificacionesPromedioDTO
    })
    @ApiNotFoundResponse({ description: 'Producto no encontrado' })
    async obtenerPromedio(@Param('productoId') productoId: number): Promise<CalificacionesPromedioDTO> {
        try {
            console.log(`Ingresando al endpoint de obtener promedio con productoId: ${productoId}`);
            return await this.calificacionesService.obtenerCalificacionesPromedio(productoId);
        } catch (error) {
            if (error.status === HttpStatus.NOT_FOUND) {
                throw error;
            } else {
                throw new HttpException('Error al obtener los datos', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}