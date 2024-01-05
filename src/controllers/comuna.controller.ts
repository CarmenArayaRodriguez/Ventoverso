import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ComunaService } from 'src/services/comuna.service';
import { ComunaDto } from 'src/dto/comuna.dto';
import { Comuna } from 'src/entities/comuna.entity';

@ApiTags('comunas')
@Controller('comunas')
export class ComunaController {
    private readonly logger = new Logger(ComunaController.name);

    constructor(private readonly comunaService: ComunaService) { }

    @Get()
    @ApiOkResponse({ type: [ComunaDto] })
    async obtenerTodasLasComunas(): Promise<ComunaDto[]> {
        this.logger.log('Obteniendo todas las comunas');
        try {
            const comunas = await this.comunaService.obtenerTodasLasComunas();
            this.logger.debug(`Se encontraron ${comunas.length} comunas`);
            return comunas.map(comuna => this.transformarAComunaDto(comuna));
        } catch (error) {
            this.logger.error(`Error obteniendo comunas: ${error.message}`, error.stack);
            throw error;
        }
    }

    private transformarAComunaDto(comuna: Comuna): ComunaDto {
        const comunaDto = new ComunaDto();
        comunaDto.id = comuna.id;
        comunaDto.nombre = comuna.nombre;
        comunaDto.idCiudad = comuna.ciudad?.id;
        return comunaDto;
    }
}
