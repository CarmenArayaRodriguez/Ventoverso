import { Controller, Get, Body, Post, Delete, Put, Param, HttpStatus, HttpException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { BlogYNoticiasService } from '../services/blog-y-noticias.service';
import { CrearPostDTO } from '../dto/crear-post.dto';
import { EditarPostDTO } from '../dto/editar-post.dto';
import { CardResponseDTO } from '../dto/home-card-response.dto';
import { v4 as uuidv4 } from 'uuid';
import { CategoriaBlog } from '../blog-y-noticias/enums/categoria-blog.enum';

@ApiTags('Blog y noticias')
@Controller('blog-y-noticias')
export class BlogYNoticiasController {

    constructor(private readonly blogYNoticiasService: BlogYNoticiasService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })

    getBlogYNoticias(): string {
        return this.blogYNoticiasService.getBlogYNoticias();
    }

    @Get('/home-cards')
    @ApiOperation({ summary: 'Obtener las tarjetas para el home' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve un conjunto de tarjetas de ejemplo.',
        type: [CardResponseDTO],
    })

    getHomeCards(): CardResponseDTO[] {
        return [
            {
                id: 1,
                titulo: 'Tarjeta 1',
                imagen: 'https://ejemplo.com/imagen1.jpg',

            },
            {
                id: 2,
                titulo: 'Tarjeta 2',
                imagen: 'https://ejemplo.com/imagen2.jpg',

            },
            {
                id: 3,
                titulo: 'Tarjeta 3',
                imagen: 'https://ejemplo.com/imagen3.jpg',
            },
            {
                id: 4,
                titulo: 'Tarjeta 4',
                imagen: 'https://ejemplo.com/imagen4.jpg',
            },
        ];
    }

    @Post('/posts')
    @ApiOperation({ summary: 'Crear un nuevo post' })
    @ApiBody({ type: CrearPostDTO })
    @ApiResponse({ status: 201, description: 'Post creado correctamente.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    async crearPost(@Body() crearPostDto: CrearPostDTO): Promise<any> {
        try {
            const postCreado = await this.blogYNoticiasService.crearNuevoPost(crearPostDto);
            return postCreado;
        } catch (error) {
            throw new HttpException('Error al crear el post: ' + error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Put('/posts/:id')
    @ApiOperation({ summary: 'Editar un post' })
    @ApiBody({ description: 'Datos para editar un post existente', type: EditarPostDTO })
    @ApiParam({ name: 'id', required: true, description: 'ID del post a editar' })
    @ApiResponse({ status: 200, description: 'Post editado correctamente.' })
    @ApiResponse({ status: 404, description: 'Post no encontrado.' })
    async editarPost(@Param('id') id: number, @Body() editarPostDto: EditarPostDTO): Promise<any> {
        try {
            const postEditado = await this.blogYNoticiasService.editarPost(id, editarPostDto);
            if (!postEditado) {
                throw new HttpException('Post no encontrado', HttpStatus.NOT_FOUND);
            }
            return postEditado;
        } catch (error) {
            throw new HttpException('Error al editar el post: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Delete('/posts/:id')
    @ApiOperation({ summary: 'Eliminar un post' })
    @ApiParam({ name: 'id', required: true, description: 'ID del post a eliminar' })
    @ApiResponse({ status: 200, description: 'Post eliminado correctamente.' })
    @ApiResponse({ status: 404, description: 'Post no encontrado.' })
    async eliminarPost(@Param('id') id: number): Promise<any> {
        try {
            const postEliminado = await this.blogYNoticiasService.eliminarPost(id);
            if (!postEliminado) {
                throw new HttpException('Post no encontrado', HttpStatus.NOT_FOUND);
            }
            return { message: 'Post eliminado correctamente.' };
        } catch (error) {
            throw new HttpException('Error al eliminar el post: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/clarinetes-cards')
    @ApiOperation({ summary: 'Obtener las tarjetas para entradas de clarinetes' })
    @ApiResponse({
        status: 200,
        description: 'Devuelve un conjunto de tarjetas relacionadas con clarinetes.',
        type: [CardResponseDTO],
    })

    getClarinetesPosts(): CardResponseDTO[] {
        return [
            {
                id: 1,
                titulo: 'Clarinetista Famoso 1',
                imagen: 'https://ejemplo.com/clarinete1.jpg',
            },
            {
                id: 2,
                titulo: 'Orquesta con Clarinete 2',
                imagen: 'https://ejemplo.com/clarinete2.jpg',
            },
            {
                id: 3,
                titulo: 'Música Clásica con Clarinete 3',
                imagen: 'https://ejemplo.com/clarinete3.jpg',
            },
            {
                id: 4,
                titulo: 'El Clarinete en Jazz 4',
                imagen: 'https://ejemplo.com/clarinete4.jpg',
            },
        ];
    }


}
