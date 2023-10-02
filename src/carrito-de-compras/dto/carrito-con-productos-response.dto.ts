import { ApiProperty } from '@nestjs/swagger';
import { ProductoEnCarritoResponseDTO } from './producto-en-carrito-response.dto';

export class CarritoConProductosResponseDTO {
    @ApiProperty({ description: 'ID único del carrito', example: 'carrito123' })
    carritoId: string;

    @ApiProperty({ description: 'Productos en el carrito', type: [ProductoEnCarritoResponseDTO] })
    productos: ProductoEnCarritoResponseDTO[];
}
