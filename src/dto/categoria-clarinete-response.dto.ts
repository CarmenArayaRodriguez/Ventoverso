import { ApiProperty } from '@nestjs/swagger';

export class CategoriaClarineteResponseDTO {
    @ApiProperty({ description: 'Identificador único para la categoría.', example: 'id-123' })
    id: number;

    @ApiProperty({ description: 'Nombre de la categoría.', example: 'Clarinete Sib' })
    nombre: string;

    @ApiProperty({ description: 'URL de la imagen de la categoría.', example: 'https://ejemplo.com/imagen.jpg' })
    imagenUrl: string;
}
