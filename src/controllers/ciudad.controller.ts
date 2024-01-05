import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { CiudadService } from 'src/services/ciudad.service';
import { CiudadDto } from 'src/dto/ciudad.dto';
import { Ciudad } from 'src/entities/ciudad.entity';

@ApiTags('ciudades')
@Controller('ciudades')
export class CiudadController {
    private readonly logger = new Logger(CiudadController.name);

    constructor(private readonly ciudadService: CiudadService) { }

    @Get()
    @ApiOkResponse({ type: [CiudadDto] })
    async obtenerTodasLasCiudades(): Promise<CiudadDto[]> {
        this.logger.log('Obteniendo todas las ciudades');
        try {
            const ciudades = await this.ciudadService.obtenerTodasLasCiudades();
            this.logger.debug(`Se encontraron ${ciudades.length} ciudades`);

            return ciudades.map(ciudad => this.transformarACiudadDto(ciudad));
        } catch (error) {
            this.logger.error(`Error obteniendo ciudades: ${error.message}`, error.stack);
            throw error;
        }
    }

    private transformarACiudadDto(ciudad: Ciudad): CiudadDto {
        const ciudadDto = new CiudadDto();
        ciudadDto.id = ciudad.id;
        ciudadDto.nombre = ciudad.nombre;
        ciudadDto.idRegionEnvio = ciudad.idRegionEnvio;
        return ciudadDto;
    }
}