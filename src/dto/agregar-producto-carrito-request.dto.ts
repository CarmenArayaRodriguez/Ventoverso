import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class AgregarProductoCarritoRequestDTO {
    @ApiProperty({ description: 'ID único del carrito', example: 'carrito123' })
    @IsString()
    @IsNotEmpty()
    carritoId: string;

    @ApiProperty({ description: 'ID único del producto', example: 'producto123' })
    @IsString()
    @IsNotEmpty()
    productoId: string;

    @ApiProperty({ description: 'Cantidad del producto a agregar', example: 2 })
    @IsNumber()
    @Min(1)
    cantidad: number;
}