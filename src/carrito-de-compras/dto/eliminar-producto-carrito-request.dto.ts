import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class EliminarProductoCarritoRequestDTO {
    @ApiProperty({
        description: 'El ID del carrito del cual se quiere eliminar el producto',
        example: '1234-abcd-5678-efgh'
    })
    @IsString()
    @IsNotEmpty()
    carritoId: string;

    @ApiProperty({
        description: 'El ID del producto que se quiere eliminar del carrito',
        example: 'abcd-1234-efgh-5678'
    })
    @IsString()
    @IsNotEmpty()
    productoId: string;
}
