import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class EditarSuscripcionDTO {
    @ApiProperty({ description: 'ID de la suscripción' })
    @IsNotEmpty()
    id: number;

    @ApiProperty({ description: 'Nuevo correo para la suscripción' })
    @IsEmail()
    @IsNotEmpty()
    nuevoCorreo: string;
}