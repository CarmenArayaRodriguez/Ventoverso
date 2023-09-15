import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CardDTO {
    @ApiProperty({ description: 'ID de la tarjeta', example: 'id-123' })
    @IsString()
    id: string;

    @ApiProperty({ description: 'Título de la tarjeta', example: 'Tarjeta Ejemplo' })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({ description: 'URL de la imagen de la tarjeta', example: 'https://ejemplo.com/imagen.jpg' })
    @IsString()
    @IsNotEmpty()
    imagenUrl: string;
}
