import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, isNumber, isString} from 'class-validator';



export class EliminarUsuarioDTO {
    @ApiProperty({ description: 'Nombre del Usuario' })
    nombre: string;

    @ApiProperty({ description: 'Primer Apellido del usuario' })
    apellido: String


   @ApiProperty({
        description: 'Rut del usuario que se va a eliminnar sin punto ni Digito verificador',
        example: '11554322'
    })
    @IsNotEmpty() 
    readonly rut :number;
    
    @ApiProperty({
        description: 'Digito verificador del rut de usuario a eliminar',
        example: '5'
    })
    @IsNotEmpty() 
    readonly dv:number;

    

    
}

