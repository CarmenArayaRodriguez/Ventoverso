import { Controller, Get, HttpStatus, Param, NotFoundException } from '@nestjs/common';
import { ComentariosService } from '../services/comentarios.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ComentarioClienteResponseDTO } from 'src/dto/comentario-cliente-response.dto';

@Controller('comentarios')
export class ComentariosController {
    constructor(private comentariosService: ComentariosService) { }

    @Get('/:productoId')
    @ApiOperation({ summary: 'Obtener comentarios de un producto' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Comentarios obtenidos correctamente',
        type: [ComentarioClienteResponseDTO]
    })
    @ApiResponse({
        status: HttpStatus.NOT_FOUND,
        description: 'Comentarios no encontrados para el producto especificado'
    })
    async obtenerComentarios(@Param('productoId') productoId: number): Promise<ComentarioClienteResponseDTO[]> {
        const comentarios = await this.comentariosService.obtenerComentariosDelProducto(productoId);
        if (!comentarios || comentarios.length === 0) {
            throw new NotFoundException('Comentarios no encontrados para el producto especificado');
        }
        return comentarios;
    }
}
