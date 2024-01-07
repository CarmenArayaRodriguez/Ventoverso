// import { ApiProperty } from '@nestjs/swagger';
// import { IsEmail, IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';

// export class CitaDTO {
//     @ApiProperty({
//         description: 'El nombre de la persona que reserva la cita',
//         example: 'Juan Pérez',
//     })
//     @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
//     nombre: string;
//     @ApiProperty({
//         description: 'El RUT del cliente',
//         example: '99.999.999-9',
//     })
//     @IsString()
//     @IsNotEmpty({ message: 'El RUT no puede estar vacío.' })
//     @MaxLength(10, { message: 'El RUT no puede tener más de 12 caracteres.' }) // Ajusta el tamaño si es necesario
//     rut: string;

//     @IsEmail({}, { message: 'Debe proporcionar un correo electrónico válido.' })
//     email: string;

//     @ApiProperty({
//         description: 'La fecha y hora de la cita',
//         example: '2024-07-21T17:00:00.000Z',
//         type: 'string',
//         format: 'date-time'
//     })

//     @ApiProperty({
//         description: 'El número de teléfono de contacto del cliente',
//         example: '+56 9 9999 9999',
//     })
//     telefono: string;

//     @ApiProperty({
//         description: 'Instrumentos que el cliente desea probar',
//         example: ['Clarinete Sib Schreiber', 'Instrumento 2', 'Instrumento 3'],
//         type: 'array',
//         items: {
//             type: 'string',
//         },
//         maxItems: 3,
//     })
//     @IsString({ each: true })
//     @IsNotEmpty({ each: true, message: 'La lista de instrumentos no puede estar vacía.' })
//     @MaxLength(255, { each: true, message: 'El nombre del instrumento no puede tener más de 255 caracteres.' })
//     instrumentos: string[];
//     @ApiProperty({
//         description: 'El correo electrónico de contacto de la persona',
//         example: 'juan.perez@ejemplo.com',
//     })

//     @IsDateString({}, { message: 'Debe proporcionar una fecha y hora válidas en formato ISO 8601.' })
//     fecha: Date;
// }
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CitaDTO {
    @ApiProperty({
        description: 'El nombre de la persona que reserva la cita',
        example: 'Margarita Martinez',
        required: false
    })
    @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
    nombre?: string;

    @ApiProperty({
        description: 'El RUT del cliente',
        example: '99.999.999-9',
    })
    @IsString()
    @IsNotEmpty({ message: 'El RUT no puede estar vacío.' })
    @MaxLength(12, { message: 'El RUT no puede tener más de 12 caracteres.' }) // Ajusta el tamaño si es necesario
    rut: string;

    @ApiProperty({
        description: 'El correo electrónico de contacto de la persona',
        example: 'margarita@gmail.com',
    })
    @IsEmail({}, { message: 'Debe proporcionar un correo electrónico válido.' })
    email: string;

    @ApiProperty({
        description: 'El número de teléfono de contacto del cliente',
        example: '+56 9 9999 9999',
    })
    telefono: string;

    @ApiProperty({
        description: 'Instrumentos que el cliente desea probar (Máx. 3)',
        example: ['Clarinete SIb Schreiber', 'Instrumento 2', 'Instrumento 3'],
        type: 'array',
        items: {
            type: 'string',
        },
    })
    @IsString({ each: true })
    @IsNotEmpty({ each: true, message: 'La lista de instrumentos no puede estar vacía.' })
    @MaxLength(255, { each: true, message: 'El nombre del instrumento no puede tener más de 255 caracteres.' })
    instrumentos: string[];

    @ApiProperty({
        description: 'La fecha y hora programadas para la cita',
        example: '2024-07-21T17:00:00.000Z',
        type: 'string',
        format: 'date-time'
    })
    @IsDateString({}, { message: 'Debe proporcionar una fecha y hora válidas en formato ISO 8601.' })
    fecha: Date;
}
