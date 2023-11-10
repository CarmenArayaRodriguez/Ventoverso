// import { ProductoEnCarritoResponseDTO } from "./producto-en-carrito-response.dto";
// import { ResumenCompraResponseDTO } from "./resumen-compra-response.dto";

// export class CheckoutResponseDTO {
//     carritoId: string;
//     productos: ProductoEnCarritoResponseDTO[];
//     resumenCompra: ResumenCompraResponseDTO;
//     datosComprador: {
//         userId: string,
//         nombre: string;
//         apellido: string;
//         rut: string;
//         email: string;
//         direccion: string;
//         region: string;
//         ciudad: string;
//         comuna: string;
//         telefono: string;
//     };
//     datosEnvio: {
//         servicioPaqueteria: string;
//         tiempoEntrega: string;
//         costoEnvio: number;
//     };
//     datosPago: {
//         metodoPago: string;
//     };
//     totalPagar: number;
//     comentarios?: string;
// }
import { ApiProperty } from '@nestjs/swagger';
import { ProductoEnCarritoResponseDTO } from "./producto-en-carrito-response.dto";
import { ResumenCompraResponseDTO } from "./resumen-compra-response.dto";
import { DatosCompradorRequestDTO } from './datos-comprador-request.dto';
import { DatosEnvioDTO } from './datos-envío.dto';
import { DatosPagoDTO } from './datos-pago.dto';

export class CheckoutResponseDTO {
    @ApiProperty({ description: 'El ID del carrito', example: 'carrito123' })
    carritoId: string;

    @ApiProperty({ description: 'Lista de productos en el carrito', type: [ProductoEnCarritoResponseDTO] })
    productos: ProductoEnCarritoResponseDTO[];

    @ApiProperty({ description: 'Resumen de la compra', type: ResumenCompraResponseDTO })
    resumenCompra: ResumenCompraResponseDTO;

    @ApiProperty({ description: 'Datos del comprador', type: DatosCompradorRequestDTO })
    datosComprador: DatosCompradorRequestDTO;

    @ApiProperty({ description: 'Datos de envío', type: DatosEnvioDTO })
    datosEnvio: DatosEnvioDTO;

    @ApiProperty({ description: 'Datos de pago', type: DatosPagoDTO })
    datosPago: DatosPagoDTO;

    @ApiProperty({ description: 'Total a pagar', example: 246809 })
    totalPagar: number;

    @ApiProperty({
        description: 'Comentarios adicionales',
        example: 'Por favor, entregar en la mañana.',
        required: false,
    })
    comentarios?: string;
}
