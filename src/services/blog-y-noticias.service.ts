
import { Injectable } from '@nestjs/common';
import { CrearPostDTO } from '../dto/crear-post.dto';
import { EditarPostDTO } from '../dto/editar-post.dto';
import { IPost } from '../interfaces/blog-y-noticias.interface';
import { CardResponseDTO } from 'src/dto/home-card-response.dto';
import { CategoriaBlog } from 'src/enums/categoria-blog.enum';

@Injectable()
export class BlogYNoticiasService {
    private posts: IPost[] = [];
    getBlogYNoticias(): string {
        return 'Blog y noticias';
    }

    crearNuevoPost(postData: CrearPostDTO): IPost {
        const nuevoPost: IPost = {
            ...postData,
            id: this.posts.length + 1,
            imagen: 'defaultImage.jpg',
            categoria: CategoriaBlog.GENERAL,
        };
        this.posts.push(nuevoPost);
        return nuevoPost;
    }


    editarPost(id: number, editarPostDto: EditarPostDTO): IPost {
        const index = this.posts.findIndex(post => post.id === id);
        if (index === -1) throw new Error('Post no encontrado');


        const postEditado: IPost = {
            ...this.posts[index],
            ...editarPostDto,
            imagen: editarPostDto.imagen || this.posts[index].imagen,
            categoria: editarPostDto.categoria || this.posts[index].categoria
        };

        this.posts[index] = postEditado;
        return this.posts[index];
    }


    eliminarPost(id: number): string {
        const index = this.posts.findIndex(post => post.id === id);
        if (index === -1) throw new Error('Post no encontrado');

        this.posts.splice(index, 1);
        return 'Post eliminado correctamente';
    }


    getPostsByCategoria(categoria: CategoriaBlog): CardResponseDTO[] {
        return this.posts.filter(post => post.categoria === categoria)
            .map(post => {

                return {
                    ...post,
                };
            });

    }
}
