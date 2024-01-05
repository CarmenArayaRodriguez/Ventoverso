import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class EliminarProductoCarritoRequestDTO {
    @ApiProperty({
        description: 'El ID del carrito del cual se quiere eliminar el producto',
        example: 1234
    })
    @IsNotEmpty()
    carritoId: number;

    @ApiProperty({
        description: 'El ID del producto que se quiere eliminar del carrito',
        example: 1234
    })
    @IsNotEmpty()
    productoId: number;
}
