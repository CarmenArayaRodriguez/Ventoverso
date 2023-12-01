import { PartialType } from '@nestjs/swagger';
import { CrearProductoDTO } from './crear-producto.dto';
import { IsArray, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ImagenDTO } from './imagen-producto.dto';

export class ActualizarProductoDTO extends PartialType(CrearProductoDTO) {
    @ApiProperty({ description: 'URLs de las imágenes del producto', type: [String], required: false })
    @IsArray()
    @IsUrl({}, { each: true })
    @IsOptional()
    imagenes?: ImagenDTO[];
}
