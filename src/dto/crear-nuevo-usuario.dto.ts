import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, isNumber } from 'class-validator';



export class CrearUsuarioDTO {
    @ApiProperty({ description: 'Nombre del Usuario' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Primer Apellido del usuario' })
    @IsString()
    @IsNotEmpty()
    apellido: string;

    @ApiProperty({
        description: 'Rut del usuario que se va a crear sin punto ni Digito verificador',
        example: '12444356'
    })
    @IsNotEmpty()
    rut: string;

    @ApiProperty({
        description: 'Digito verificador del rut de usuario a editar',
        example: '5'
    })
    dv: string;

    @ApiProperty({ description: 'e-mail del usuario' })
    @IsNotEmpty()
    email: string;


    @ApiProperty({ description: 'Password Usuario' })
    @IsNotEmpty()
    password: string;




}
