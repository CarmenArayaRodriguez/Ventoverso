import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsEmail } from 'class-validator';

export class EditarUsuarioDTO {
    @ApiProperty({
        description: 'Nombre del Usuario',
        example: 'Juan'
    })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({
        description: 'Primer Apellido del usuario',
        example: 'Pérez'
    })
    @IsString()
    @IsNotEmpty()
    apellido: string;

    @ApiProperty({
        description: 'RUT del usuario que se va a editar sin punto ni Dígito verificador',
        example: '11554322'
    })
    @IsNumber()
    @IsNotEmpty()
    rut: number;

    @ApiProperty({
        description: 'Dígito verificador del RUT del usuario a editar',
        example: '5'
    })
    @IsNumber()
    @IsNotEmpty()
    dv: number;

    @ApiProperty({
        description: 'Correo electrónico del usuario',
        example: 'juan.perez@example.com'
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;
}
