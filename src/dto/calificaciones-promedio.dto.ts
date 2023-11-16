import { ApiProperty } from "@nestjs/swagger";

export class CalificacionesPromedioDTO {
    @ApiProperty({ example: 4.5 })
    promedioGeneral: number;

    @ApiProperty({ example: 4.0 })
    promedioCaracteristicas: number;

    @ApiProperty({ example: 4.2 })
    promedioSonido: number;

    @ApiProperty({ example: 4.3 })
    promedioFabricacion: number;

    @ApiProperty({ example: 4.5 })
    promedioEstrellas: number;
}