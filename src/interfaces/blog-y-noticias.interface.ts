import { CategoriaBlog } from "../enums/categoria-blog.enum";

export interface IPost {
    id: number;
    titulo: string;
    contenido: string;
    fechaPublicacion: Date;
    autorId: number;
    imagen: string;
    categoria: CategoriaBlog;
}
