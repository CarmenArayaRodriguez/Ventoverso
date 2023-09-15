import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';


export class CrearPostDTO {
    @ApiProperty({ example: 'Mi primer post' })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({ example: 'Este es el contenido de mi primer post' })
    @IsString()
    @IsNotEmpty()
    contenido: string;

    @ApiProperty({ example: '2023-09-08' })
    @IsDate()
    @Transform(({ value }) => new Date(value))
    fechaPublicacion: Date;

    @ApiProperty({ example: '12345' })
    @IsString()
    autorId: string;
}
