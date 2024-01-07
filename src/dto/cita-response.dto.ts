import { ApiProperty } from '@nestjs/swagger';

export class CitaResponseDTO {
    @ApiProperty({
        example: 1,
        description: 'El identificador único de la cita',
    })
    id: number;

    @ApiProperty({
        example: 'Margarita Martínez',
        description: 'El nombre de la persona que reserva la cita',
    })
    nombre: string;

    @ApiProperty({
        example: 'margarita@gmail.com',
        description: 'El correo electrónico de contacto de la persona',
    })
    email: string;

    @ApiProperty({
        example: '99.999.999-9',
        description: 'El RUT del cliente asociado con la cita',
    })
    rut: string;

    @ApiProperty({
        example: '+56 9 9999 9999',
        description: 'El número de teléfono de contacto del cliente',
    })
    telefono: string;

    @ApiProperty({
        example: ['Clarinete Sib Schreiber'],
        description: 'Lista de instrumentos que el cliente desea probar',
        type: 'array',
        items: {
            type: 'string',
        },
    })
    instrumentos: string[];

    @ApiProperty({
        example: '2024-07-21T17:00:00.000Z',
        description: 'La fecha y hora programadas para la cita',
        type: 'string',
        format: 'date-time',
    })
    fecha: Date;
}
