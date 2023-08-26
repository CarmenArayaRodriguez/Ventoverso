import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServicioAlClienteService } from './servicio-al-cliente.service';

@ApiTags('Servicio al cliente')
@Controller('servicio-al-cliente')
export class ServicioAlClienteController {

    constructor(private readonly servicioAlClienteService: ServicioAlClienteService) { }
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })

    @ApiResponse({ status: 200, description: 'La solicitud se ha procesado con éxito y la información solicitada se encuentra en la respuesta.' })
    @ApiResponse({ status: 201, description: 'Recurso creado exitosamente.' })
    @ApiResponse({ status: 202, description: 'La solicitud ha sido aceptada para su procesamiento, pero este no ha sido completado.' })
    @ApiResponse({ status: 400, description: 'Solicitud incorrecta. Los parámetros proporcionados pueden estar mal formados o faltar.' })
    @ApiResponse({ status: 401, description: 'No autorizado. El usuario necesita autenticarse para obtener permiso para responder a la solicitud.' })
    @ApiResponse({ status: 402, description: 'Pago requerido. Se debe realizar un pago para acceder al recurso.' })
    @ApiResponse({ status: 404, description: 'El recurso solicitado no se encontró.' })
    @ApiResponse({ status: 500, description: 'Error interno del servidor. Algo salió mal en el servidor al procesar la solicitud.' })
    @ApiResponse({ status: 503, description: 'Servicio no disponible. El servidor no puede manejar la solicitud en este momento.' })

    getServicioAlCliente(): string {
        return this.servicioAlClienteService.getServicioAlCliente();
    }
}
