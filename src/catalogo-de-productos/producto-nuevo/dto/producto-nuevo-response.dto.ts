import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class ProductoNuevoResponseDTO {
    @ApiProperty({ description: 'ID del producto' })
    id: string;

    @ApiProperty({ description: 'Nombre del producto' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Marca del producto' })
    @IsString()
    @IsNotEmpty()
    marca: string;

    @ApiProperty({ description: 'Modelo del producto' })
    @IsString()
    @IsNotEmpty()
    modelo: string;

    @ApiProperty({ description: 'Imágenes del producto', type: [String] })
    @IsArray()
    @IsNotEmpty()
    imagenes: string[];

    @ApiProperty({ description: 'Precio del producto' })
    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @ApiProperty({ description: 'Características principales del producto' })
    @IsString()
    @IsNotEmpty()
    caracteristicasPrincipales: string;

    @ApiProperty({ description: 'Descripción del producto' })
    @IsString()
    @IsNotEmpty()
    descripcion: string;
}
