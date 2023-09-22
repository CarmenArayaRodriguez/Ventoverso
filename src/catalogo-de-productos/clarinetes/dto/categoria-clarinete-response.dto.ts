import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CategoriaClarineteResponseDTO {
    @ApiProperty({ description: 'Identificador único para la categoría.', example: 'id-123' })
    id: string;

    @ApiProperty({ description: 'Nombre de la categoría.', example: 'Clarinete Sib' })
    nombre: string;

    @ApiProperty({ description: 'URL de la imagen de la categoría.', example: 'https://ejemplo.com/imagen.jpg' })
    imagenUrl: string;

    @ApiProperty({ description: 'URL de detalle de la subcategoria', example: 'https://ejemplo.com/subcategoria', required: true })
    @IsString()
    linkDetalle: string;
}
