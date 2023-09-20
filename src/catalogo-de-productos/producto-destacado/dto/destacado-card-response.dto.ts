import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DestacadoCardResponseDTO {
    @ApiProperty({ description: 'URL de la imagen del producto', example: 'https://ejemplo.com/imagen.jpg' })
    @IsString()
    @IsNotEmpty()
    imagenUrl: string;

    @ApiProperty({ description: 'Cantidad de estrellas del producto', example: 4 })
    @IsNumber()
    estrellas: number;

    // @ApiProperty({ description: 'Rating del producto', example: 4.5 })
    // @IsNumber()
    // rating: number;

    @ApiProperty({ description: 'Nombre del producto', example: 'Producto genial' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Precio del producto', example: 19900 })
    @IsNumber()
    precio: number;

}



