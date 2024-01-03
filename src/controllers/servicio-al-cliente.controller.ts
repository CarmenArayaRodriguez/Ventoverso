// import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
// import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { ServicioAlClienteService } from '../services/servicio-al-cliente.service';
// import { SuscripcionDTO } from '../dto/suscripcion.dto';
// import { EditarSuscripcionDTO } from '../dto/editar-suscripcion.dto';
// import { DetalleEstrellasResponseDTO } from '../dto/detalle-de-estrellas-response.dto';
// import { ComentarioClienteResponseDTO } from '../dto/comentario-cliente-response.dto';
// import { ClientesCalificacionGeneralResponseDTO } from '../dto/clientes-clasificacion-general-response.dto';

// @ApiTags('Servicio al cliente')
// @Controller('servicio-al-cliente')
// export class ServicioAlClienteController {

//     constructor(private readonly servicioAlClienteService: ServicioAlClienteService) { }
//     @Get()
//     @ApiOperation({ summary: 'Obtener el nombre del módulo' })

//     @ApiResponse({ status: 200, description: 'La solicitud se ha procesado con éxito y la información solicitada se encuentra en la respuesta.' })

//     getServicioAlCliente(): string {
//         return this.servicioAlClienteService.getServicioAlCliente();
//     }

//     @Post('suscribir')
//     @ApiOperation({ summary: 'Suscribir al newsletter' })
//     @ApiResponse({ status: 200, description: 'Usuario suscrito exitosamente' })
//     suscribir(@Body() suscripcionDTO: SuscripcionDTO) {
//         return this.servicioAlClienteService.suscribir(suscripcionDTO);
//     }

//     @Patch('editar-suscripcion')
//     @ApiOperation({ summary: 'Editar correo de la suscripción' })
//     @ApiResponse({ status: 200, description: 'Correo editado exitosamente' })
//     editarSuscripcion(@Body() editarSuscripcionDTO: EditarSuscripcionDTO) {
//         return this.servicioAlClienteService.editarSuscripcion(editarSuscripcionDTO);
//     }

//     @Delete('dar-de-baja/:id')
//     @ApiOperation({ summary: 'Darse de baja del newsletter' })
//     @ApiResponse({ status: 200, description: 'Usuario dado de baja exitosamente' })
//     darDeBaja(@Param('id') id: string) {
//         return this.servicioAlClienteService.darDeBaja(id);
//     }

//     @Get(':idProducto/calificaciones')
//     @ApiOperation({ summary: 'Obtener calificaciones generales de un producto' })
//     @ApiResponse({
//         status: 200,
//         description: 'Calificación general del producto obtenida exitosamente',
//         type: ClientesCalificacionGeneralResponseDTO,
//     })
//     obtenerCalificacion(@Param('idProducto') idProducto: string): ClientesCalificacionGeneralResponseDTO {

//         const mockCalificacionGeneral: ClientesCalificacionGeneralResponseDTO = {
//             productoId: 1,
//             promedioEstrellas: 4.2,
//             numeroComentarios: 5,
//             promedioCalificaciones: { caracteristicas: 4.5, sonido: 4.2, fabricacion: 4.0 }
//         };

//         return mockCalificacionGeneral;
//     }

//     @Get(':idProducto/detalle-estrellas')
//     @ApiOperation({ summary: 'Obtener detalle de estrellas de un producto' })
//     @ApiResponse({
//         status: 200,
//         description: 'Detalle de estrellas obtenido exitosamente',
//         type: DetalleEstrellasResponseDTO,
//     })
//     obtenerDetalleEstrellas(@Param('idProducto') idProducto: string): DetalleEstrellasResponseDTO {
//         const mockDetalleEstrellas: DetalleEstrellasResponseDTO = {
//             productoId: '1234',
//             detalleEstrellas: [
//                 { nivel: 5, cantidad: 10 },
//                 { nivel: 4, cantidad: 5 },
//                 { nivel: 3, cantidad: 3 },
//                 { nivel: 2, cantidad: 1 },
//                 { nivel: 1, cantidad: 1 },
//             ],
//         };

//         return mockDetalleEstrellas;
//     }


// @Get(':idProducto/comentarios')
// @ApiOperation({ summary: 'Obtener comentarios de un producto' })
// @ApiResponse({
//     status: 200,
//     description: 'Comentarios del producto obtenidos exitosamente',
//     type: [ComentarioClienteResponseDTO],
// })
// obtenerComentarios(@Param('idProducto') idProducto: string): ComentarioClienteResponseDTO[] {
//     const mockDataComentarios: ComentarioClienteResponseDTO[] = [
//         {
//             productoId: 1,
//             rutCliente: '56789120',
//             nombreCliente: 'Benjamín Rojas',
//             estrellas: 5,
//             titulo: 'Excelente producto!',
//             comentario: 'Me encantó mi nuevo clarinete',
//             reacciones: { MeGusta: 10, NoMeGusta: 1, Denunciar: 0 }
//         },
//         {
//             productoId: 2,
//             rutCliente: '9012',
//             nombreCliente: 'Ana Farías',
//             estrellas: 4,
//             titulo: 'Muy buen producto.',
//             comentario: 'Es un buen producto pero esperaba más de sus características y sonido',
//             reacciones: { MeGusta: 8, NoMeGusta: 2, Denunciar: 0 }
//         }
//     ];

//     return mockDataComentarios;
// }
// }

