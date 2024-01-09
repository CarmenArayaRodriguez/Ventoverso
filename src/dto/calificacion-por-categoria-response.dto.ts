import { IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CalificacionPorCategoriaDTO {
    @ApiProperty({
        description: 'Calificación de las características del producto, en una escala de 1 a 5',
        example: 4
    })
    @IsInt()
    @Min(1)
    @Max(5)
    caracteristicas: number;

    @ApiProperty({
        description: 'Calificación del sonido del producto, en una escala de 1 a 5',
        example: 3
    })
    @IsInt()
    @Min(1)
    @Max(5)
    sonido: number;

    @ApiProperty({
        description: 'Calificación de la fabricación del producto, en una escala de 1 a 5',
        example: 5
    })
    @IsInt()
    @Min(1)
    @Max(5)
    fabricacion: number;
}
