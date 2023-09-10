import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class SuscripcionDTO {
    @ApiProperty({ description: 'Correo del usuario para suscripción' })
    @IsEmail()
    @IsNotEmpty()
    correo: "ejemplo@dominio.com";
}