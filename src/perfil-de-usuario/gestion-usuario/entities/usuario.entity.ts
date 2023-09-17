import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, isNotEmpty } from 'class-validator';

export class Usuario {
    @ApiProperty()
    rut: string;

    @ApiProperty()
    nombre: string;

    @ApiProperty()
    apellido: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
    dv: string;

}


