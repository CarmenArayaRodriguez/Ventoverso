import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class CrearPostDTO {
    @ApiProperty({ description: 'Título del post' })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({ description: 'Contenido del post' })
    @IsString()
    @IsNotEmpty()
    contenido: string;

    @ApiProperty({ description: 'Fecha de publicación del post' })
    @IsDate()
    fechaPublicacion: Date;

    @ApiProperty({ description: 'ID del autor del post' })
    @IsNumber()
    autorId: string;
}
