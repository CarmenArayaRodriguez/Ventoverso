import { IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CalificacionPorCategoriaDTO {
    @ApiProperty()
    @IsInt()
    @Min(1)
    @Max(5)
    caracteristicas: number;

    @ApiProperty()
    @IsInt()
    @Min(1)
    @Max(5)
    sonido: number;

    @ApiProperty()
    @IsInt()
    @Min(1)
    @Max(5)
    fabricacion: number;
}