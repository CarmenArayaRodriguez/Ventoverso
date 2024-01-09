import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, Min, Max, IsInt, IsObject, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CalificacionPorCategoriaDTO } from './calificacion-por-categoria-response.dto';
import { ReaccionesAComentarioDTO } from './reacciones-a-comentario.response.dto';

export class ComentarioClienteResponseDTO {
    @ApiProperty({
        description: 'Identificador único del producto',
        example: 123
    })
    @IsString()
    productoId: number;

    @ApiProperty({
        description: 'Nombre del cliente que realizó el comentario',
        example: 'Juan Pérez'
    })
    @IsString()
    @IsNotEmpty()
    nombreCliente: string;

    @ApiProperty({
        description: 'Calificación en estrellas dada por el cliente (1 a 5)',
        example: 4
    })
    @IsInt()
    @Min(1)
    @Max(5)
    estrellas: number;

    @ApiProperty({
        description: 'Título del comentario',
        example: 'Excelente producto'
    })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({
        description: 'Detalle del comentario realizado por el cliente',
        example: 'El producto cumplió todas mis expectativas...'
    })
    @IsString()
    @IsNotEmpty()
    comentario: string;

    @ApiProperty({
        description: 'Calificaciones detalladas por categoría del producto',
        type: CalificacionPorCategoriaDTO
    })
    @IsObject()
    @ValidateNested()
    @Type(() => CalificacionPorCategoriaDTO)
    calificaciones: CalificacionPorCategoriaDTO;

    @ApiProperty({
        description: 'Reacciones al comentario, como "Me gusta", "No me gusta" y "Denunciar"',
        type: ReaccionesAComentarioDTO,
        example: { MeGusta: 5, NoMeGusta: 2, Denunciar: 0 }
    })
    @IsObject()
    @ValidateNested({ each: true })
    @Type(() => ReaccionesAComentarioDTO)
    reacciones: ReaccionesAComentarioDTO;
}
