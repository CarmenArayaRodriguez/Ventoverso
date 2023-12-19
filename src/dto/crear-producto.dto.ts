import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsUrl, IsArray, Min, Max, ValidateNested } from 'class-validator';
import { ImagenDTO } from './imagen-producto.dto';
import { DetalleProductoDto } from './detalle-producto.dto';
import { Type } from 'class-transformer';

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

    @ApiProperty({ type: () => DetalleProductoDto, description: 'Detalles del producto' })
    @ValidateNested()
    @Type(() => DetalleProductoDto)
    @IsOptional()
    detalles?: DetalleProductoDto;

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

    // @ApiProperty({ description: 'Características principales del producto', required: false })
    // @IsString()
    // @IsOptional()
    // caracteristicasPrincipales?: string;

    @ApiProperty({ description: 'Imágenes del producto', type: [ImagenDTO], required: false })
    imagenes?: ImagenDTO[];

    @ApiProperty({ description: 'Cantidad de estrellas del producto', example: 4, required: false })
    @IsNumber()
    @IsOptional()
    @Min(0)
    @Max(5)
    estrellas?: number;


}

