import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class IngresarRequestDTO {
    @ApiProperty({ example: 'ejemplo@correo.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'tuContraseña' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({ example: true, required: false })
    permanecerConectado?: boolean;
}