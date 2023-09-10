import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';


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
    @Transform(({ value }) => new Date(value))
    fechaPublicacion: Date;

    @ApiProperty({ description: 'ID del autor del post' })
    @IsString()
    autorId: string;
}
