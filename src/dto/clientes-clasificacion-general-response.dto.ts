import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CalificacionPorCategoriaDTO } from './calificacion-por-categoria-response.dto';

export class ClientesCalificacionGeneralResponseDTO {
    @ApiProperty({
        description: 'Identificador único del producto',
        example: 123
    })
    @IsString()
    productoId: number;

    @ApiProperty({
        description: 'Promedio de estrellas recibidas por el producto',
        example: 4.5
    })
    @IsNumber()
    promedioEstrellas: number;

    @ApiProperty({
        description: 'Número total de comentarios recibidos por el producto',
        example: 150
    })
    @IsNumber()
    numeroComentarios: number;

    @ApiProperty({
        description: 'Promedios de calificaciones por categoría del producto',
        type: CalificacionPorCategoriaDTO
    })
    @IsObject()
    @ValidateNested()
    @Type(() => CalificacionPorCategoriaDTO)
    promedioCalificaciones: CalificacionPorCategoriaDTO;
}