import { Controller, Get, Body, Post, Delete, Put, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { BlogYNoticiasService } from './blog-y-noticias.service';
import { CrearPostDTO } from './dto/crear-post.dto';
import { EditarPostDTO } from './dto/editar-post.dto';
import { CardResponseDTO } from './dto/home-card-response.dto';
import { v4 as uuidv4 } from 'uuid';
import { CategoriaBlog } from './enums/categoria-blog.enum';

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
                id: uuidv4(),
                titulo: 'Tarjeta 1',
                imagenUrl: 'https://ejemplo.com/imagen1.jpg',
                linkDetalle: 'https://ejemplo.com/publicacion'
            },
            {
                id: uuidv4(),
                titulo: 'Tarjeta 2',
                imagenUrl: 'https://ejemplo.com/imagen2.jpg',
                linkDetalle: 'https://ejemplo.com/publicacion'
            },
            {
                id: uuidv4(),
                titulo: 'Tarjeta 3',
                imagenUrl: 'https://ejemplo.com/imagen3.jpg',
                linkDetalle: 'https://ejemplo.com/publicacion'
            },
            {
                id: uuidv4(),
                titulo: 'Tarjeta 4',
                imagenUrl: 'https://ejemplo.com/imagen4.jpg',
                linkDetalle: 'https://ejemplo.com/publicacion'
            },
        ];
    }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo post' })
    @ApiBody({ type: CrearPostDTO })

    crearPost(@Body() crearPostDto: CrearPostDTO) {
        return this.blogYNoticiasService.crearNuevoPost(crearPostDto);
    }

    @Put('/:id')
    @ApiOperation({ summary: 'Editar un post' })
    @ApiBody({
        description: 'Datos para editar un post existente',
        required: true,
        schema: {
            type: 'object',
            properties: {
                id: { type: 'string', example: '64b660c5-acda-4122-b895-87592f41d93a' },
                titulo: { type: 'string', example: 'Mi post editado' },
                contenido: { type: 'string', example: 'Este es el contenido editado de mi post' },
                fechaPublicacion: { type: 'string', example: '2023-09-09' },
                autorId: { type: 'string', example: '12345' }
            }
        }
    })
    @ApiResponse({ status: 200, description: 'Post editado correctamente.' })
    editar(@Param('id') id: string, @Body() editarPostDto: EditarPostDTO): string {
        return this.blogYNoticiasService.editarPost(editarPostDto);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Eliminar un post' })
    @ApiParam({ name: 'id', required: true, description: 'ID del post a eliminar', example: '1234' })
    @ApiResponse({ status: 200, description: 'Post eliminado correctamente.' })
    eliminar(@Param('id') id: string): string {
        return this.blogYNoticiasService.eliminarPost({ id });
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
                id: uuidv4(),
                titulo: 'Clarinetista Famoso 1',
                imagenUrl: 'https://ejemplo.com/clarinete1.jpg',
                linkDetalle: 'https://ejemplo.com/publicacion'
            },
            {
                id: uuidv4(),
                titulo: 'Orquesta con Clarinete 2',
                imagenUrl: 'https://ejemplo.com/clarinete2.jpg',
                linkDetalle: 'https://ejemplo.com/publicacion'
            },
            {
                id: uuidv4(),
                titulo: 'Música Clásica con Clarinete 3',
                imagenUrl: 'https://ejemplo.com/clarinete3.jpg',
                linkDetalle: 'https://ejemplo.com/publicacion'
            },
            {
                id: uuidv4(),
                titulo: 'El Clarinete en Jazz 4',
                imagenUrl: 'https://ejemplo.com/clarinete4.jpg',
                linkDetalle: 'https://ejemplo.com/publicacion'
            },
        ];
    }


}
