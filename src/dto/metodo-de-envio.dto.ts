import { ApiProperty } from '@nestjs/swagger';

export class MetodoEnvioDTO {
    @ApiProperty({
        description: 'ID único del método de envío',
        example: 1
    })
    id: number;

    @ApiProperty({
        description: 'Nombre del método de envío',
        example: 'Envío Express'
    })
    nombre: string;

    @ApiProperty({
        description: 'Descripción detallada del método de envío',
        example: 'Entrega en 24 horas para áreas metropolitanas'
    })
    descripcion: string;

    @ApiProperty({
        description: 'Costo del servicio de envío',
        example: 5990
    })
    costoEnvio: number;
}
