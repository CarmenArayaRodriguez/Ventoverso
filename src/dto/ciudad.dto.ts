import { ApiProperty } from '@nestjs/swagger';

export class CiudadDto {
    @ApiProperty({
        example: 1,
        description: 'ID único de la ciudad'
    })
    id: number;

    @ApiProperty({
        example: 'Santiago',
        description: 'Nombre de la ciudad'
    })
    nombre: string;

    @ApiProperty({
        example: 1,
        description: 'ID de la región a la que pertenece la ciudad'
    })
    idRegionEnvio: number;
}