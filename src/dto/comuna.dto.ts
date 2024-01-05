import { ApiProperty } from '@nestjs/swagger';

export class ComunaDto {
    @ApiProperty({
        example: 1,
        description: 'ID único de la comuna'
    })
    id: number;

    @ApiProperty({
        example: 'Santiago',
        description: 'Nombre de la comuna'
    })
    nombre: string;

    @ApiProperty({
        example: 1,
        description: 'ID de la ciudad asociada a la comuna'
    })
    idCiudad: number;
}
