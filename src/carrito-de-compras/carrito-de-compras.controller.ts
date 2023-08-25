import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Carrito de compras')
@Controller('carrito-de-compras')
export class CarritoDeComprasController {
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })
    @ApiResponse({ status: 200, description: 'Carrito de compras' })
    getCarritoDeCompras(): string {
        return 'Carrito de compras';
    }
}
