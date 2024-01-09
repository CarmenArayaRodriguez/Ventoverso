import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class EditarSuscripcionDTO {
    @ApiProperty({
        description: 'ID de la suscripción que será editada',
        example: 123
    })
    @IsNotEmpty()
    id: number;

    @ApiProperty({
        description: 'Nuevo correo electrónico para actualizar la suscripción',
        example: 'nuevoemail@example.com'
    })
    @IsEmail()
    @IsNotEmpty()
    nuevoCorreo: string;
}
