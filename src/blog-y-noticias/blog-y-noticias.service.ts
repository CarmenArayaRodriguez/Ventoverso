import { Injectable } from '@nestjs/common';
import { CrearPostDTO } from './dto/crear-post.dto';
import { v4 as uuidv4 } from 'uuid';
import { EditarPostDTO } from './dto/editar-post.dto';
import { EliminarPostDTO } from './dto/eliminar-post.dto';
import { IPost } from './interfaces/blog-y-noticias.interface';
import { CategoriaBlog } from './enums/categoria-blog.enum';
import { Card } from './entities/home-card.entity';
import { BlogPost } from './entities/post.entity';
import { CardResponseDTO } from './dto/home-card-response.dto';


@Injectable()
export class BlogYNoticiasService {
    getBlogYNoticias(): string {
        return 'Blog y noticias';
    }
    private posts: BlogPost[] = [];



    crearNuevoPost(postData: CrearPostDTO): IPost {
        const nuevoPost: IPost = {
            ...postData,
            id: uuidv4(),
        };
        return nuevoPost;
    }

    editarPost(editarPostDto: EditarPostDTO): string {
        return 'Post editado correctamente';
    }

    eliminarPost(eliminarPostDto: EliminarPostDTO): string {

        return 'Post eliminado correctamente';
    }

    getPostsByCategoria(categoria: CategoriaBlog): CardResponseDTO[] {
        return this.posts.filter(post => post.categoria === categoria);
    }

}
