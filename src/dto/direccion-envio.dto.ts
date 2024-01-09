import { ApiProperty } from '@nestjs/swagger';

export class DireccionEnvioDto {
    @ApiProperty({
        description: 'Dirección completa de envío, incluyendo calle y número',
        example: 'Calle Falsa 123'
    })
    direccion: string;

    @ApiProperty({
        description: 'Nombre de la comuna para el envío',
        example: 'Providencia'
    })
    comuna: string;

    @ApiProperty({
        description: 'Nombre de la ciudad para el envío',
        example: 'Santiago'
    })
    ciudad: string;

    @ApiProperty({
        description: 'Nombre de la región para el envío',
        example: 'Región Metropolitana'
    })
    region: string;
}
