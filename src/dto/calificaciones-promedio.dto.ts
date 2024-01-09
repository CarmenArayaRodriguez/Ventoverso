import { ApiProperty } from "@nestjs/swagger";

export class CalificacionesPromedioDTO {
    @ApiProperty({
        description: 'Promedio general de todas las calificaciones del producto',
        example: 4.5
    })
    promedioGeneral: number;

    @ApiProperty({
        description: 'Promedio de calificaciones específicamente para las características del producto',
        example: 4.0
    })
    promedioCaracteristicas: number;

    @ApiProperty({
        description: 'Promedio de calificaciones para la calidad del sonido del producto',
        example: 4.2
    })
    promedioSonido: number;

    @ApiProperty({
        description: 'Promedio de calificaciones para la calidad de fabricación del producto',
        example: 4.3
    })
    promedioFabricacion: number;

    @ApiProperty({
        description: 'Promedio de las calificaciones de estrellas otorgadas al producto',
        example: 4.5
    })
    promedioEstrellas: number;
}
