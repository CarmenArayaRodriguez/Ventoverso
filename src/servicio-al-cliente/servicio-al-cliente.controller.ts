import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServicioAlClienteService } from './servicio-al-cliente.service';
import { SuscripcionDTO } from './suscripcion/dto/suscripcion.dto';
import { EditarSuscripcionDTO } from './suscripcion/dto/editar-suscripcion.dto';
import { DetalleEstrellasResponseDTO } from './calificaciones-de-clientes/dto/detalle-de-estrellas-response.dto';
import { ComentarioClienteResponseDTO } from './calificaciones-de-clientes/dto/comentario-cliente-response.dto';
import { ClientesCalificacionGeneralResponseDTO } from './calificaciones-de-clientes/dto/clientes-clasificacion-general-response.dto';

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

    @Get(':idProducto/calificaciones')
    @ApiOperation({ summary: 'Obtener calificaciones generales de un producto' })
    @ApiResponse({
        status: 200,
        description: 'Calificación general del producto obtenida exitosamente',
        type: ClientesCalificacionGeneralResponseDTO,
    })
    obtenerCalificacion(@Param('idProducto') idProducto: string): ClientesCalificacionGeneralResponseDTO {

        const mockCalificacionGeneral: ClientesCalificacionGeneralResponseDTO = {
            productoId: '1234',
            promedioEstrellas: 4.2,
            numeroComentarios: 5,
        };

        return mockCalificacionGeneral;
    }

    @Get(':idProducto/detalle-estrellas')
    @ApiOperation({ summary: 'Obtener detalle de estrellas de un producto' })
    @ApiResponse({
        status: 200,
        description: 'Detalle de estrellas obtenido exitosamente',
        type: DetalleEstrellasResponseDTO,
    })
    obtenerDetalleEstrellas(@Param('idProducto') idProducto: string): DetalleEstrellasResponseDTO {
        const mockDetalleEstrellas: DetalleEstrellasResponseDTO = {
            productoId: '1234',
            detalleEstrellas: [
                { nivel: 5, cantidad: 10 },
                { nivel: 4, cantidad: 5 },
                { nivel: 3, cantidad: 3 },
                { nivel: 2, cantidad: 1 },
                { nivel: 1, cantidad: 1 },
            ],
        };

        return mockDetalleEstrellas;
    }


    @Get(':idProducto/comentarios')
    @ApiOperation({ summary: 'Obtener comentarios de un producto' })
    @ApiResponse({
        status: 200,
        description: 'Comentarios del producto obtenidos exitosamente',
        type: [ComentarioClienteResponseDTO],
    })
    obtenerComentarios(@Param('idProducto') idProducto: string): ComentarioClienteResponseDTO[] {
        const mockDataComentarios: ComentarioClienteResponseDTO[] = [
            {
                productoId: '1234',
                cliente: '5678',
                fotoClienteUrl: 'https://ejemplo.com/foto-cliente-1.jpg',
                estrellas: 5,
                texto: 'Excelente producto!',
                reacciones: { MeGusta: 10, NoMeGusta: 1, Denunciar: 0 }
            },
            {
                productoId: '1234',
                cliente: '9012',
                fotoClienteUrl: 'https://ejemplo.com/foto-cliente-2.jpg',
                estrellas: 4,
                texto: 'Muy buen producto.',
                reacciones: { MeGusta: 8, NoMeGusta: 2, Denunciar: 0 }
            }
        ];

        return mockDataComentarios;
    }
}

