import { Controller, Get, Logger } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegionesService } from 'src/services/region.service';
import { Region } from 'src/entities/region.entity';
import { RegionDto } from 'src/dto/region.dto';

@ApiTags('regiones')
@Controller('regiones')
export class RegionesController {
    private readonly logger = new Logger(RegionesController.name);

    constructor(private readonly regionesService: RegionesService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las regiones', description: 'Devuelve una lista de todas las regiones disponibles.' })
    @ApiOkResponse({ type: [RegionDto] })
    async obtenerTodasLasRegiones(): Promise<RegionDto[]> {
        this.logger.log('Obteniendo todas las regiones');
        try {
            const regiones = await this.regionesService.obtenerTodasLasRegiones();
            this.logger.debug(`Se encontraron ${regiones.length} regiones`);
            return regiones.map(region => this.transformarARegionDto(region));
        } catch (error) {
            this.logger.error(`Error obteniendo regiones: ${error.message}`, error.stack);
            throw error;
        }
    }

    private transformarARegionDto(region: Region): RegionDto {
        const regionDto = new RegionDto();
        regionDto.id = region.id;
        regionDto.nombre = region.nombre;

        return regionDto;
    }
}

