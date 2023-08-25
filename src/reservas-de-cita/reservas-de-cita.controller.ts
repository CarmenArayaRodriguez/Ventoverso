import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Reservas de cita')
@Controller('reservas-de-cita')
export class ReservasDeCitaController {
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })
    @ApiResponse({ status: 200, description: 'Reservas de cita' })
    getReservasDeCita(): string {
        return 'Reservas de cita';
    }
}
