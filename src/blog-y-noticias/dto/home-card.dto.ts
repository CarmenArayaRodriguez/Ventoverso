import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CardDTO {
    @ApiProperty({ description: 'ID de la tarjeta' })
    @IsString()
    id: string;

    @ApiProperty({ description: 'Título de la tarjeta' })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({ description: 'URL de la imagen de la tarjeta' })
    @IsString()
    @IsNotEmpty()
    imagenUrl: string;
}
