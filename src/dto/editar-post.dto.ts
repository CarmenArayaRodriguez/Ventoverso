import { ApiProperty } from "@nestjs/swagger";
import { CategoriaBlog } from "src/enums/categoria-blog.enum";

export class EditarPostDTO {
    @ApiProperty({
        description: 'ID del post que será editado',
        example: 1
    })
    id: number;

    @ApiProperty({
        description: 'Título actualizado del post',
        example: 'Novedades en Desarrollo Web'
    })
    titulo: string;

    @ApiProperty({
        description: 'Contenido actualizado del post',
        example: 'En este artículo, exploraremos las últimas tendencias en desarrollo web...'
    })
    contenido: string;

    @ApiProperty({
        description: 'Fecha de publicación del post',
        example: '2024-01-10'
    })
    fechaPublicacion: Date;

    @ApiProperty({
        description: 'ID del autor del post',
        example: 12345
    })
    autorId: number;

    @ApiProperty({
        description: 'Imagen representativa del post',
        example: 'http://example.com/imagen.jpg',
        required: false
    })
    imagen?: string;

    @ApiProperty({
        description: 'Categoría del post',
        example: CategoriaBlog.GENERAL,
        required: false
    })
    categoria?: CategoriaBlog;
}