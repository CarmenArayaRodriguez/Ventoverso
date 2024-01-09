import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class ProductoEnCarritoResponseDTO {
    @ApiProperty({ description: 'ID único del producto', example: 123 })
    @IsString()
    productoId: number;

    @ApiProperty({ description: 'Marca del producto', example: "Yamaha" })
    @IsString()
    marca: string;

    @ApiProperty({ description: 'Modelo del producto', example: "Sib 04" })
    @IsString()
    modelo: string;

    @ApiProperty({ description: 'Precio del producto', example: 1400000 })
    @IsNumber()
    precio: number;

    @ApiProperty({ description: 'Cantidad del producto', example: 1 })
    @IsNumber()
    cantidad: number;

    @ApiProperty({ description: 'Imagen del producto', example: 'imagen.jpg' })
    @IsString()
    imagenUrl: string;
}
