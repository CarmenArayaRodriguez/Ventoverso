import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CardResponseDTO {
    @ApiProperty({ description: 'ID de la tarjeta', example: 1 })
    id: number;

    @ApiProperty({ description: 'Título del artículo', example: '¿Cómo elegir un clarinete?' })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({ description: 'Imagen del artículo', example: 'https://ejemplo.com/imagen.jpg' })
    @IsString()
    @IsNotEmpty()
    imagen: string;

}
