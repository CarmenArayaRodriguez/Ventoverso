import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Catalogo de productos')
@Controller('catalogo-de-productos')
export class CatalogoDeProductosController {
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })
    @ApiResponse({ status: 200, description: 'Catálogo de productos' })
    getCatalogoDeProduductos(): string {
        return 'Catálogo de productos';
    }
}
