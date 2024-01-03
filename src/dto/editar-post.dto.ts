import { ApiProperty } from "@nestjs/swagger";
import { CategoriaBlog } from "src/blog-y-noticias/enums/categoria-blog.enum";

export class EditarPostDTO {
    @ApiProperty({ description: 'ID del post que será editado' })
    id: number;

    @ApiProperty({ description: 'Título del post' })
    titulo: string;

    @ApiProperty({ description: 'Contenido del post' })
    contenido: string;

    @ApiProperty({ description: 'Fecha de publicación del post' })
    fechaPublicacion: Date;

    @ApiProperty({ description: 'ID del autor del post' })
    autorId: number;

    @ApiProperty({ description: 'Imagen del post', required: false })
    imagen?: string;

    @ApiProperty({ description: 'Categoría del post', required: false })
    categoria?: CategoriaBlog;
}
