import { Controller, Get, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
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
    async obtenerCarrusel(@Param('id', ParseIntPipe) id: number): Promise<CarruselItemResponseDTO> {
        const carrusel = await this.carruselService.obtenerCarrusel(id);
        if (!carrusel) {
            throw new NotFoundException('Carrusel no encontrado');
        }
        return this.transformarACarruselItemResponseDTO(carrusel);
    }

    private transformarACarruselItemResponseDTO(carrusel: Carrusel): CarruselItemResponseDTO {
        if (!carrusel) {
            throw new Error('El carrusel no puede ser nulo');
        }
        return {
            id: carrusel.id,
            titulo: carrusel.nombre,
            descripcion: carrusel.descripcion,
            imagenUrl: carrusel.imagenUrl,
        };
    }
}
