import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CrearPostDTO {
    @ApiProperty({
        description: 'Título del post',
        example: 'Mi primer post'
    })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({
        description: 'Contenido del post',
        example: 'Este es el contenido de mi primer post'
    })
    @IsString()
    @IsNotEmpty()
    contenido: string;

    @ApiProperty({
        description: 'Fecha de publicación del post',
        example: '2023-09-08'
    })
    @IsDate()
    @Transform(({ value }) => new Date(value))
    fechaPublicacion: Date;

    @ApiProperty({
        description: 'Identificador del autor del post',
        example: 12345
    })
    autorId: number;
}
