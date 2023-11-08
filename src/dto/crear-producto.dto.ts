import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsUrl } from 'class-validator';

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

    @ApiProperty({ description: 'URL del producto', required: false })
    @IsUrl()
    @IsOptional()
    url_producto?: string;
}

