import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class CheckoutRequestDTO {
    @ApiProperty({
        description: 'El ID del usuario',
        example: 123,
    })
    @IsNotEmpty()
    userId: number;

    @ApiProperty({
        description: 'El nombre del usuario',
        example: 'Juan',
    })
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({
        description: 'El apellido del usuario',
        example: 'Perez',
    })
    @IsNotEmpty()
    apellido: string;

    @ApiProperty({
        description: 'El RUT del usuario',
        example: '12345678-9',
    })
    @IsNotEmpty()
    rut: string;

    @ApiProperty({
        description: 'El correo electrónico del usuario',
        example: 'juan.perez@example.com',
    })
    @IsEmail()
    email: string;

    // @ApiProperty({
    //     description: 'La dirección del usuario',
    //     example: 'Calle Falsa 123',
    // })
    // @IsNotEmpty()
    // direccion: string;

    @ApiProperty({
        description: 'La región del usuario',
        example: 'Región Metropolitana',
    })
    @IsNotEmpty()
    region: string;

    @ApiProperty({
        description: 'La ciudad del usuario',
        example: 'Santiago',
    })
    @IsNotEmpty()
    ciudad: string;

    @ApiProperty({
        description: 'La comuna del usuario',
        example: 'Las Condes',
    })
    @IsNotEmpty()
    comuna: string;

    @ApiProperty({
        description: 'El número de teléfono del usuario',
        example: '+56912345678',
    })
    @IsPhoneNumber('CL')
    telefono: string;

    @ApiProperty({
        description: 'El método de pago seleccionado por el usuario',
        example: 'Tarjeta de Crédito',
    })
    @IsNotEmpty()
    metodoPago: string;

    @ApiProperty({
        description: 'La opción de envío seleccionada por el usuario',
        example: 'Envío Estándar',
    })
    @IsNotEmpty()
    opcionEnvio: string;

    @ApiProperty({
        description: 'Comentarios adicionales proporcionados por el usuario',
        example: 'Por favor, entregar en la mañana.',
        required: false,
    })
    comentarios?: string;
}
