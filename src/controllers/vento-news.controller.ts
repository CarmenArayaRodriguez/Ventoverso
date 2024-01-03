import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
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
            const articulos = await this.ventoNewsService.obtenerArticulos();
            if (!articulos || articulos.length === 0) {
                throw new HttpException('No se encontraron artículos', HttpStatus.NOT_FOUND);
            }
            return articulos;
        } catch (error) {
            if (error.status === HttpStatus.NOT_FOUND) {
                throw new HttpException('No se encontraron artículos', HttpStatus.NOT_FOUND);
            } else {
                throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
