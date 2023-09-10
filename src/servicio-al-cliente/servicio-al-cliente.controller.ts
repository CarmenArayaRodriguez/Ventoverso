import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServicioAlClienteService } from './servicio-al-cliente.service';
import { SuscripcionDTO } from './suscripcion/dto/suscripcion.dto';
import { EditarSuscripcionDTO } from './suscripcion/dto/editar-suscripcion.dto';

@ApiTags('Servicio al cliente')
@Controller('servicio-al-cliente')
export class ServicioAlClienteController {

    constructor(private readonly servicioAlClienteService: ServicioAlClienteService) { }
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })

    @ApiResponse({ status: 200, description: 'La solicitud se ha procesado con éxito y la información solicitada se encuentra en la respuesta.' })

    getServicioAlCliente(): string {
        return this.servicioAlClienteService.getServicioAlCliente();
    }

    @Post('suscribir')
    @ApiOperation({ summary: 'Suscribir al newsletter' })
    @ApiResponse({ status: 200, description: 'Usuario suscrito exitosamente' })
    suscribir(@Body() suscripcionDTO: SuscripcionDTO) {
        return this.servicioAlClienteService.suscribir(suscripcionDTO);
    }

    @Patch('editar-suscripcion')
    @ApiOperation({ summary: 'Editar correo de la suscripción' })
    @ApiResponse({ status: 200, description: 'Correo editado exitosamente' })
    editarSuscripcion(@Body() editarSuscripcionDTO: EditarSuscripcionDTO) {
        return this.servicioAlClienteService.editarSuscripcion(editarSuscripcionDTO);
    }

    @Delete('dar-de-baja/:id')
    @ApiOperation({ summary: 'Darse de baja del newsletter' })
    @ApiResponse({ status: 200, description: 'Usuario dado de baja exitosamente' })
    darDeBaja(@Param('id') id: string) {
        return this.servicioAlClienteService.darDeBaja(id);
    }
}
