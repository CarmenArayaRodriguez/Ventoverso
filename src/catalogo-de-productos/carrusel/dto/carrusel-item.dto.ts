import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsOptional, IsEnum } from "class-validator";

export class CarouselItemDTO {
    @ApiProperty({ description: 'ID del ítem del carrusel', example: 'carousel-id-1' })
    @IsString()
    id: string;

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

    @ApiProperty({
        description: 'Tipo de ítem del carrusel', enum: ['Promoción', 'Nuevo Producto', 'Concurso'],
        example: 'Concurso'
    })
    @IsString()
    @IsNotEmpty()
    @IsEnum(['Promoción', 'Nuevo Producto', 'Concurso'])
    tipo: 'Promoción' | 'Nuevo Producto' | 'Concurso';

    @ApiProperty({ description: 'URL de detalle para el ítem del carrusel', example: 'https://ejemplo.com/concurso-xyz', required: false })
    @IsString()
    @IsOptional()
    linkDetalle?: string;
}
