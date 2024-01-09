import { ApiProperty } from '@nestjs/swagger';
import { ProductoEnCarritoResponseDTO } from "./producto-en-carrito-response.dto";
import { ResumenCompraResponseDTO } from "./resumen-compra-response.dto";
import { DatosCompradorRequestDTO } from './datos-comprador-request.dto';
import { DatosEnvioDTO } from './datos-envio.dto';
import { DatosPagoDTO } from './datos-pago.dto';

export class CheckoutResponseDTO {
    @ApiProperty({ description: 'El ID del carrito', example: 1 })
    carritoId: number;

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
