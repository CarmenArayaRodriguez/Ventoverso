import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class ProductoCatalogoSubcategoriaResponseDTO {
    @ApiProperty({ description: 'ID del producto' })
    id: string;

    @ApiProperty({ description: 'Imagen del producto', type: [String] })
    @IsArray()
    @IsNotEmpty()
    imagenes: string[];

    @ApiProperty({ description: 'Cantidad de estrellas del producto', example: 4 })
    @IsNumber()
    estrellas: number;

    @ApiProperty({ description: 'Nombre del producto' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Precio del producto' })
    @IsNumber()
    @IsNotEmpty()
    precio: number;

}
