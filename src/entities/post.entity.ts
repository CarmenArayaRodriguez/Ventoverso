import { CategoriaBlog } from "../enums/categoria-blog.enum";

export class BlogPost {
    id: number;
    imagen: string;
    titulo: string;
    contenido: string;
    fechaPublicacion: Date;
    autorId: number;
    categoria: CategoriaBlog;
}
