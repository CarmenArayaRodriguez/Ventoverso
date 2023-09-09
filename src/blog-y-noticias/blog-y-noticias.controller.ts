import { Controller, Get, Body, Post, Delete, Put, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { BlogYNoticiasService } from './blog-y-noticias.service';
import { CrearPostDTO } from './dto/crear-post.dto';
import { EditarPostDTO } from './dto/editar-post.dto';

@ApiTags('Blog y noticias')
@Controller('blog-y-noticias')
export class BlogYNoticiasController {

    constructor(private readonly blogYNoticiasService: BlogYNoticiasService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })

    getBlogYNoticias(): string {
        return this.blogYNoticiasService.getBlogYNoticias();
    }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo post' })
    @ApiBody({ type: CrearPostDTO })
    crearPost(@Body() crearPostDto: CrearPostDTO) {
        return this.blogYNoticiasService.crearNuevoPost(crearPostDto);
    }

    @Put('/:id')
    @ApiOperation({ summary: 'Editar un post' })
    @ApiResponse({ status: 200, description: 'Post editado correctamente.' })
    editar(@Param('id') id: string, @Body() editarPostDto: EditarPostDTO): string {
        return this.blogYNoticiasService.editarPost(editarPostDto);
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'Eliminar un post' })
    @ApiResponse({ status: 200, description: 'Post eliminado correctamente.' })
    eliminar(@Param('id') id: string): string {
        return this.blogYNoticiasService.eliminarPost({ id });
    }

}
