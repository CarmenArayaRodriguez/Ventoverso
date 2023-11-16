import { Controller, Get, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CarruselService } from 'src/services/carrusel.service';
import { CarruselItemResponseDTO } from 'src/dto/carrusel-item-response.dto';
import { Carrusel } from 'src/entities/carrusel.entity';

@ApiTags('carrusel')
@Controller('carrusel')
export class CarruselController {
    constructor(private readonly carruselService: CarruselService) { }

    @Get(':id')
    @ApiOkResponse({ type: CarruselItemResponseDTO })
    @ApiNotFoundResponse({ description: 'Carrusel no encontrado' })
    async obtenerCarrusel(@Param('id') id: number): Promise<CarruselItemResponseDTO> {
        const carrusel = await this.carruselService.obtenerCarrusel(id);
        return this.transformarACarruselItemResponseDTO(carrusel);
    }

    private transformarACarruselItemResponseDTO(carrusel: Carrusel): CarruselItemResponseDTO {
        return {
            id: carrusel.id,
            titulo: carrusel.nombre,
            descripcion: carrusel.descripcion,
            imagenUrl: carrusel.imagenUrl,
        };
    }
}