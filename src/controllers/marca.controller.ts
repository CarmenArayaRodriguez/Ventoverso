import { Controller, Get, HttpStatus, HttpException } from '@nestjs/common';
import { MarcaService } from 'src/services/marca.service';
import { Marca } from 'src/entities/marca.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('marcas')
@Controller('marcas')
export class MarcaController {
    constructor(private readonly marcaService: MarcaService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las marcas' })
    @ApiResponse({ status: 200, description: 'Retorna todas las marcas.' })
    @ApiResponse({ status: 404, description: 'No se encontraron marcas' })
    async obtenerTodasLasMarcas(): Promise<Marca[]> {
        try {
            const marcas = await this.marcaService.obtenerTodasLasMarcas();
            if (!marcas || marcas.length === 0) {
                throw new HttpException('No se encontraron marcas', HttpStatus.NOT_FOUND);
            }
            return marcas;
        } catch (error) {
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
