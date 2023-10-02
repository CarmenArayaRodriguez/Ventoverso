import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class ProductoEnCarritoResponseDTO {
    @ApiProperty({ description: 'ID único del producto', example: 'producto123' })
    @IsString()
    productoId: string;

    @ApiProperty({ description: 'Marca del producto' })
    @IsString()
    marca: string;

    @ApiProperty({ description: 'Modelo del producto' })
    @IsString()
    modelo: string;

    @ApiProperty({ description: 'Precio del producto' })
    @IsNumber()
    precio: number;

    @ApiProperty({ description: 'Cantidad del producto' })
    @IsNumber()
    cantidad: number;

    @ApiProperty({ description: 'URL de la imagen del producto', example: 'https://ejemplo.com/imagen.jpg' })
    @IsString()
    imagenUrl: string;
}
