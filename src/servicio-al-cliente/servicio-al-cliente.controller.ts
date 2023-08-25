import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Servicio al cliente')
@Controller('servicio-al-cliente')
export class ServicioAlClienteController {
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })
    @ApiResponse({ status: 200, description: 'Servicio al cliente' })
    getServicioAlCliente(): string {
        return 'Servicio al cliente';
    }
}
