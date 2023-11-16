import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CalificacionPorCategoriaDTO } from './calificacion-por-categoria-response.dto';

export class ClientesCalificacionGeneralResponseDTO {
    @ApiProperty()
    @IsString()
    productoId: number;

    @ApiProperty()
    @IsNumber()
    promedioEstrellas: number;

    @ApiProperty()
    @IsNumber()
    numeroComentarios: number;

    @ApiProperty({ type: CalificacionPorCategoriaDTO })
    @IsObject()
    @ValidateNested()
    @Type(() => CalificacionPorCategoriaDTO)
    promedioCalificaciones: CalificacionPorCategoriaDTO;
}
