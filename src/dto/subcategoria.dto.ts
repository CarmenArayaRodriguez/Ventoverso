import { ApiProperty } from '@nestjs/swagger';

export class SubcategoriaDTO {
    @ApiProperty({ description: 'Identificador único para la subcategoría.', example: 1 })
    id: number;

    @ApiProperty({ description: 'Nombre de la subcategoría.', example: 'Clarinete Sib' })
    nombre: string;

    @ApiProperty({ description: 'Descripción de la subcategoría.', example: 'Subcategoría para clarinetes Sib' })
    descripcion: string;

    @ApiProperty({ description: 'URL de la imagen de la subcategoría.', example: 'https://ejemplo.com/imagen-subcategoria.jpg' })
    imagenUrl: string;
}
