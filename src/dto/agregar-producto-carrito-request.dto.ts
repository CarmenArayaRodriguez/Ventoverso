import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class AgregarProductoCarritoRequestDTO {

    @ApiProperty({ description: 'Rut del cliente', example: "12345678" })
    @IsNotEmpty()
    @IsString()
    rutCliente: string;

    @ApiProperty({ description: 'ID único del carrito', example: 0 })
    @IsNotEmpty()
    @IsNumber()
    carritoId: number;

    @ApiProperty({ description: 'ID único del producto', example: 0 })
    @IsNotEmpty()
    @IsNumber()
    productoId: number;


    @ApiProperty({ description: 'Cantidad del producto a agregar', example: 0 })
    @IsNumber()
    cantidad: number;
}