import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CarruselItemResponseDTO {
    @ApiProperty({ description: 'ID del ítem del carrusel', example: 'carousel-id-1' })
    @IsNumber()
    id: number;

    @ApiProperty({ description: 'Título del ítem', example: 'Participa y gana: Concurso XYZ' })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({ description: 'Descripción breve del ítem', example: 'Participa en nuestro concurso XYZ y gana premios increíbles.' })
    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @ApiProperty({ description: 'URL de la imagen del ítem', example: 'https://ejemplo.com/imagen-carousel1.jpg' })
    @IsString()
    @IsNotEmpty()
    imagenUrl: string;
}
