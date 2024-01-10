import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional, Min, Max, ValidateNested } from 'class-validator';
import { ImagenDTO } from './imagen-producto.dto';
import { DetalleProductoDto } from './detalle-producto.dto';
import { Type } from 'class-transformer';

export class CrearProductoDTO {
    @ApiProperty({
        description: 'ID de la categoría del producto',
        example: 1
    })
    @IsNumber()
    @IsNotEmpty()
    id_categoria: number;

    @ApiProperty({
        description: 'ID de la subcategoría del producto',
        example: 2
    })
    @IsNumber()
    @IsNotEmpty()
    id_subcategoria: number;

    @ApiProperty({
        description: 'ID de la marca del producto',
        example: 3
    })
    @IsNumber()
    @IsNotEmpty()
    id_marcas: number;

    @ApiProperty({
        description: 'Nombre del producto',
        example: 'Auriculares Inalámbricos XYZ'
    })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({
        description: 'Modelo del producto',
        example: 'XYZ-2023'
    })
    @IsString()
    @IsNotEmpty()
    modelo: string;

    @ApiProperty({
        description: 'Detalles del producto',
        type: () => DetalleProductoDto
    })
    @ValidateNested()
    @Type(() => DetalleProductoDto)
    @IsOptional()
    detalles?: DetalleProductoDto;

    @ApiProperty({
        description: 'Descripción del producto',
        example: 'Auriculares de alta calidad con cancelación de ruido'
    })
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty({
        description: 'Precio del producto',
        example: 99999
    })
    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @ApiProperty({
        description: 'Stock del producto',
        example: 50
    })
    @IsNumber()
    @IsNotEmpty()
    stock: number;

    @ApiProperty({
        description: 'Imágenes del producto',
        type: [ImagenDTO],
        example: [{ url: 'http://example.com/imagen1.jpg' }, { url: 'http://example.com/imagen2.jpg' }],
        required: false
    })
    imagenes?: ImagenDTO[];

    @ApiProperty({
        description: 'Cantidad de estrellas del producto (0 a 5)',
        example: 4,
        required: false
    })
    @IsNumber()
    @IsOptional()
    @Min(0)
    @Max(5)
    estrellas?: number;
}
