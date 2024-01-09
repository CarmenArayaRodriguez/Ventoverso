import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class ActualizarProductoCarritoDTO {

    @ApiProperty({ description: 'ID único del carrito', example: 0 })
    @IsNotEmpty()
    @IsNumber()
    carritoId: number;

    @ApiProperty({ description: 'ID único del producto', example: 0 })
    @IsNotEmpty()
    @IsNumber()
    productoId: number;

    @ApiProperty({ description: 'Nueva cantidad del producto en el carrito', example: 0 })
    @IsNotEmpty()
    @IsNumber()
    cantidad: number;

}