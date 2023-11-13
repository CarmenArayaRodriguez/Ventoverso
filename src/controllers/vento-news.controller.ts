import { Controller, Get, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { VentoNewsService } from 'src/services/vento-news.service';
import { CardResponseDTO } from 'src/dto/home-card-response.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('vento-news')
export class VentoNewsController {
    constructor(private readonly ventoNewsService: VentoNewsService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener artículos de noticias' })
    @ApiResponse({
        status: 200,
        description: 'Artículos obtenidos con éxito',
        type: [CardResponseDTO]
    })
    @ApiResponse({
        status: 404,
        description: 'No se encontraron artículos'
    })

    async obtenerArticulos(): Promise<CardResponseDTO[]> {
        try {
            return await this.ventoNewsService.obtenerArticulos();
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new HttpException('No se encontraron artículos', HttpStatus.NOT_FOUND);
            } else {
                throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
