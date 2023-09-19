import { CategoriaBlog } from "../enums/categoria-blog.enum";

export class BlogPost {
    id: string;
    imagenUrl: string;
    titulo: string;
    contenido: string;
    fechaPublicacion: Date;
    autorId: string;
    categoria: CategoriaBlog;
}
