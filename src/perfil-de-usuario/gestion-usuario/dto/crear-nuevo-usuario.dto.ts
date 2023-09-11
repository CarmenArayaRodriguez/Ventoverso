import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {IsNotEmpty, IsString } from 'class-validator';



export class CrearUsuarioDTO {
    @ApiProperty({ description: 'Nombre del Usuario' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Primer Apellido del usuario' })
    @IsString()
    @IsNotEmpty()
    apellido: string;

    @ApiProperty({ description: 'Rut del usuario' })
    @IsNotEmpty()
    rut: string

    @ApiProperty({ description: 'e-mail del usuario' })
    @IsNotEmpty()
    email :string
    
}
