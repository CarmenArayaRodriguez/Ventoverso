import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsNumber, Min } from 'class-validator';

export class ProductoDetalleResponseDTO {
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

    @ApiProperty({ description: 'Cantidad de estrellas del producto', example: 4 })
    @IsNumber()
    estrellas: number;

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

    @ApiProperty({ description: 'Stock del producto', example: 25 })
    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    stock: number;

    @ApiProperty({
        description: 'URL de la imagen del producto',
        example: 'https://ejemplo.com/imagen.jpg',
    })
    urlProducto?: string;
}
