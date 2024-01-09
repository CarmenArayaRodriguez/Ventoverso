import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max, IsString } from 'class-validator';

export class DetalleCalificacionGeneralResponseDTO {
    @ApiProperty({
        description: 'Identificador único del producto',
        example: 123
    })
    @IsString()
    productoId: number;

    @ApiProperty({
        description: 'Calificación promedio en estrellas del producto (de 1 a 5)',
        example: 4
    })
    @IsInt()
    @Min(1)
    @Max(5)
    estrellas: number;

    @ApiProperty({
        description: 'Cantidad total de calificaciones recibidas para el producto',
        example: 150
    })
    @IsInt()
    @Min(0)
    cantidad: number;
}
