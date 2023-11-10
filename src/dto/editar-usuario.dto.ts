import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString,isNumber } from 'class-validator';


export class EditarUsuarioDTO {
    @ApiProperty({ description: 'Nombre del Usuario' })
    nombre: string;

    @ApiProperty({ description: 'Primer Apellido del usuario' })
    apellido: string;

    @ApiProperty({
        description: 'Rut del usuario que se va a editar sin punto ni Digito verificador',
        example: '11554322'
    })
    @IsNotEmpty() 
    readonly rut :number;

    @ApiProperty({
        description: 'Digito verificador del rut de usuario a editar',
        example: '5'
    })
    @IsNotEmpty() 
    readonly dv:number;

    @ApiProperty({ description: 'e-mail del usuario' })
    email: string;

    
    
}
