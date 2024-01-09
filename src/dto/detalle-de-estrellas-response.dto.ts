import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

class Estrella {
    @ApiProperty({
        description: 'Nivel de estrella (de 1 a 5)',
        example: 5
    })
    @IsInt()
    @Min(1)
    @Max(5)
    nivel: number;

    @ApiProperty({
        description: 'Cantidad de veces que se ha otorgado esta calificación de estrella',
        example: 10
    })
    @IsInt()
    @Min(0)
    cantidad: number;
}

export class DetalleEstrellasResponseDTO {
    @ApiProperty({
        description: 'Identificador único del producto',
        example: 12345
    })
    productoId: number;

    @ApiProperty({
        description: 'Detalle de las estrellas otorgadas al producto',
        type: [Estrella],
        example: [{ nivel: 5, cantidad: 10 }, { nivel: 4, cantidad: 7 }, { nivel: 3, cantidad: 5 }]
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Estrella)
    detalleEstrellas: Estrella[];
}
