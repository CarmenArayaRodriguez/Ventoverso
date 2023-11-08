import { ApiProperty } from '@nestjs/swagger';
import { ProductoEnCarritoResponseDTO } from './producto-en-carrito-response.dto';
import { ResumenCompraResponseDTO } from './resumen-compra-response.dto';
import { DescuentoResponseDTO } from './descuento-response.dto';

export class CarritoConProductosResponseDTO {
    @ApiProperty({ description: 'ID único del carrito', example: 'carrito123' })
    carritoId: string;

    @ApiProperty({ description: 'Productos en el carrito', type: [ProductoEnCarritoResponseDTO] })
    productos: ProductoEnCarritoResponseDTO[];


    @ApiProperty({ description: 'Resumen de la compra', type: ResumenCompraResponseDTO })
    resumen: ResumenCompraResponseDTO;

    @ApiProperty({ description: 'Detalles del descuento' })
    descuento?: DescuentoResponseDTO;
}
