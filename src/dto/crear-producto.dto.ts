import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsUrl, IsArray, Min, Max } from 'class-validator';

export class CrearProductoDTO {
    @ApiProperty({ description: 'ID de la categoría del producto' })
    @IsNumber()
    @IsNotEmpty()
    id_categoria: number;

    @ApiProperty({ description: 'ID de la subcategoría del producto' })
    @IsNumber()
    @IsNotEmpty()
    id_subcategoria: number;

    @ApiProperty({ description: 'ID de la marca del producto' })
    @IsNumber()
    @IsNotEmpty()
    id_marcas: number;

    @ApiProperty({ description: 'Nombre del producto' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Modelo del producto' })
    @IsString()
    @IsNotEmpty()
    modelo: string;

    @ApiProperty({ description: 'Descripción del producto' })
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty({ description: 'Precio del producto' })
    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @ApiProperty({ description: 'Stock del producto' })
    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @ApiProperty({ description: 'Características principales del producto', required: false })
    @IsString()
    @IsOptional()
    caracteristicasPrincipales?: string;

    @ApiProperty({ description: 'URLs de las imágenes del producto', type: [String], required: false })
    @IsArray()
    @IsUrl({}, { each: true })
    @IsOptional()
    imagenes?: string[];

    @ApiProperty({ description: 'Cantidad de estrellas del producto', example: 4, required: false })
    @IsNumber()
    @IsOptional()
    @Min(0)
    @Max(5)
    estrellas?: number;
}

