import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsDateString, IsNotEmpty } from 'class-validator';

export class CitaDTO {
    @ApiProperty({
        description: 'El nombre de la persona que reserva la cita',
        example: 'Juan Pérez',
    })
    @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
    nombre: string;

    @ApiProperty({
        description: 'El correo electrónico de contacto de la persona',
        example: 'juan.perez@ejemplo.com',
    })
    @IsEmail({}, { message: 'Debe proporcionar un correo electrónico válido.' })
    email: string;

    @ApiProperty({
        description: 'La fecha y hora de la cita',
        example: '2024-07-21T17:00:00.000Z',
        type: 'string',
        format: 'date-time'
    })
    @IsDateString({}, { message: 'Debe proporcionar una fecha y hora válidas en formato ISO 8601.' })
    fecha: Date;
}