import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsNumber, Min } from 'class-validator';
import { DetalleProductoDto } from './detalle-producto.dto';
import { ImagenDTO } from './imagen-producto.dto';

export class ProductoDetalleResponseDTO {
    @ApiProperty({ description: 'ID del producto' })
    id: number;

    @ApiProperty({ description: 'Nombre del producto' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Marca del producto' })
    @IsString()
    @IsNotEmpty()
    marca: string;

    @ApiProperty({ description: 'Cantidad de estrellas del producto', example: 4 })
    @IsNumber()
    estrellas: number;

    @ApiProperty({ description: 'Modelo del producto' })
    @IsString()
    @IsNotEmpty()
    modelo: string;

    @ApiProperty({ description: 'Imágenes del producto', type: ImagenDTO })
    @IsArray()
    @IsNotEmpty()
    imagenes: ImagenDTO[];

    @ApiProperty({ description: 'Precio del producto' })
    @IsNumber()
    @IsNotEmpty()
    precio: number;

    // @ApiProperty({ description: 'Características principales del producto' })
    // @IsString()
    // @IsNotEmpty()
    // caracteristicasPrincipales: string;

    @ApiProperty({ type: DetalleProductoDto })
    detalle: DetalleProductoDto;

    @ApiProperty({ description: 'Descripción del producto' })
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty({ description: 'Stock del producto', example: 25 })
    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    stock: number;


}
