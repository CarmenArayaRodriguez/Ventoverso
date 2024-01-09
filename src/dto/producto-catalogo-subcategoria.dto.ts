import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductoCatalogoSubcategoriaResponseDTO {
    @ApiProperty({ description: 'ID del producto', example: 1 })
    id: number;

    @ApiProperty({ description: 'URL de la imagen del producto', example: 'https://ejemplo.com/imagen.jpg' })
    @IsString()
    @IsNotEmpty()
    imagenUrl: string;


    @ApiProperty({ description: 'Cantidad de estrellas del producto', example: 4 })
    @IsNumber()
    estrellas: number;

    @ApiProperty({ description: 'Nombre del producto', example: "Clarinete Sib" })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Precio del producto', example: 1300000 })
    @IsNumber()
    @IsNotEmpty()
    precio: number;

}
