import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, Min, Max, IsInt, IsObject, ValidateNested, isString } from 'class-validator';
import { ReaccionesAComentarioDTO } from './reacciones-a-comentario.response.dto';
import { ApiProperty } from '@nestjs/swagger';
import { CalificacionPorCategoriaDTO } from './calificacion-por-categoria-response.dto';

export class ComentarioClienteResponseDTO {
    @ApiProperty()
    @IsString()
    productoId: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombreCliente: string;

    @ApiProperty()
    @IsInt()
    @Min(1)
    @Max(5)
    estrellas: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    titulo: string;


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    comentario: string;

    @ApiProperty({ type: CalificacionPorCategoriaDTO })
    @IsObject()
    @ValidateNested()
    @Type(() => CalificacionPorCategoriaDTO)
    calificaciones: CalificacionPorCategoriaDTO;

    @ApiProperty({ type: ReaccionesAComentarioDTO, example: { MeGusta: 5, NoMeGusta: 2, Denunciar: 0 } })
    @IsObject()
    @ValidateNested({ each: true })
    @Type(() => ReaccionesAComentarioDTO)
    reacciones: ReaccionesAComentarioDTO;
}

