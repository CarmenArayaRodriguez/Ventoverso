import { Controller, Get } from '@nestjs/common';
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
    async obtenerTodasLasMarcas(): Promise<Marca[]> {
        return this.marcaService.obtenerTodasLasMarcas();
    }
}