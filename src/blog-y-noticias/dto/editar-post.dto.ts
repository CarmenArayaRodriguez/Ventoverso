import { ApiProperty } from "@nestjs/swagger";

export class EditarPostDTO {
    @ApiProperty({ description: 'ID del post que será editado' })
    id: string;

    @ApiProperty({ description: 'Título del post' })
    titulo: string;

    @ApiProperty({ description: 'Contenido del post' })
    contenido: string;

    @ApiProperty({ description: 'Fecha de publicación del post' })
    fechaPublicacion: Date;

    @ApiProperty({ description: 'ID del autor del post' })
    autorId: string;
}
