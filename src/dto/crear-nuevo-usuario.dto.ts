import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, isNumber } from 'class-validator';



export class CrearUsuarioDTO {
    @ApiProperty({ description: 'Nombre del Usuario', example: 'Juan' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Primer Apellido del usuario', example: 'Pérez' })
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

    @ApiProperty({ description: 'e-mail del usuario', example: 'juan.perez@example.com' })
    @IsNotEmpty()
    email: string;


    @ApiProperty({ description: 'Password Usuario', example: 'Contraseña123!' })
    @IsNotEmpty()
    password: string;


    @ApiProperty({ description: 'teléfono del usuario', example: '+56912345678' })
    @IsNotEmpty()
    telefono: string;

    @ApiProperty({ description: 'Dirección del usuario', example: 'Calle Falsa 123' })
    @IsString()
    direccion: string;

    @ApiProperty({ description: 'Ciudad del usuario', example: 'Santiago' })
    @IsString()
    ciudad: string;

    @ApiProperty({ description: 'Comuna del usuario', example: 'Providencia' })
    @IsString()
    comuna: string;

    @ApiProperty({ description: 'Región del usuario', example: 'Metropolitana' })
    @IsString()
    region: string;

}
