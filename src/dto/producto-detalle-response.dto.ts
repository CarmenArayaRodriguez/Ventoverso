import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsNumber, Min } from 'class-validator';
import { DetalleProductoDto } from './detalle-producto.dto';
import { ImagenDTO } from './imagen-producto.dto';

export class ProductoDetalleResponseDTO {
    @ApiProperty({ description: 'ID del producto', example: 1 })
    id: number;

    @ApiProperty({ description: 'Nombre del producto', example: "Clarinete Sib" })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Marca del producto', example: "Yamaha" })
    @IsString()
    @IsNotEmpty()
    marca: string;

    @ApiProperty({ description: 'Cantidad de estrellas del producto', example: 4 })
    @IsNumber()
    estrellas: number;

    @ApiProperty({ description: 'Modelo del producto', example: "Sib 04" })
    @IsString()
    @IsNotEmpty()
    modelo: string;

    @ApiProperty({ description: 'Imágenes del producto', type: ImagenDTO })
    @IsArray()
    @IsNotEmpty()
    imagenes: ImagenDTO[];

    @ApiProperty({ description: 'Precio del producto', example: 1300000 })
    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @ApiProperty({ type: DetalleProductoDto })
    detalle: DetalleProductoDto;

    @ApiProperty({ description: 'Descripción del producto', example: "Clarinete de madera" })
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty({ description: 'Stock del producto', example: 25 })
    @IsNumber()
    @Min(0)
    @IsNotEmpty()
    stock: number;


}
