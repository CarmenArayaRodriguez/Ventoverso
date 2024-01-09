import { PartialType } from '@nestjs/swagger';
import { CrearProductoDTO } from './crear-producto.dto';
import { IsArray, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ImagenDTO } from './imagen-producto.dto';

export class ActualizarProductoDTO extends PartialType(CrearProductoDTO) {
    @ApiProperty({ description: 'Datos de las imágenes del producto', type: [ImagenDTO], required: false })
    @IsArray()
    @IsOptional()
    imagenes?: ImagenDTO[];
}
