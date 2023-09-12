import { Body, Controller, Delete, Get, Param, Post,Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PerfilDeUsuarioService } from './perfil-de-usuario.service';
import { AgregarFavoritoDTO } from './producto-favorito/dto/agregar-favorito.dto';
import { Favorito } from './producto-favorito/entities/favorito.entity';
import { CrearUsuarioDTO } from './gestion-usuario/dto/crear-nuevo-usuario.dto';
import { EditarPostDTO } from 'src/blog-y-noticias/dto/editar-post.dto';

@ApiTags('Perfil de usuario')
@Controller('perfil-de-usuario')
export class PerfilDeUsuarioController {

    constructor(private readonly perfilDeUsuarioService: PerfilDeUsuarioService) { }
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })

    @ApiResponse({ status: 200, description: 'La solicitud se ha procesado con éxito y la información solicitada se encuentra en la respuesta.' })

    getPerfilDeUsuario(): string {
        return this.perfilDeUsuarioService.getPerfilDeUsuario();
    }

    // Producto Favorito xxxxxxxxxxxxxxx

    @Post('favorito')
    agregarFavorito(@Body() agregarFavoritoDTO: AgregarFavoritoDTO) {
        return this.perfilDeUsuarioService.agregarFavorito(agregarFavoritoDTO);
    }

    @Delete('favorito/:id')
    eliminarFavorito(@Param('id') id: string) {
        return this.perfilDeUsuarioService.eliminarFavorito(id);
    }

    @Get('favoritos')
    obtenerTodosFavoritos(): Favorito[] {
        return this.perfilDeUsuarioService.obtenerTodosFavoritos();
    }



    //Gestion de usuario xxxxxxxxxxxxxxxxxxxxxxxxx

    @Post()
    @ApiOperation({summary: 'Crear Nuevo usuario'})
    @ApiBody({ type: CrearUsuarioDTO })
    crearUsuario(@Body() crearUsuarioDTO: CrearUsuarioDTO) {
        return this.perfilDeUsuarioService.crearUsuario(crearUsuarioDTO);
    }

   /* @Put('/:rut,/:dv')
    @ApiOperation({ summary: 'Editar un Usuario' })
    @ApiResponse({ status: 200, description: 'Usuario se modifico corectamente.' })
    editar(@Param('rut,dv') rut: number,dv: number, @Body() editarUsuarioDto: EditarPostDTO): string {
        return this.perfilDeUsuarioService.editarUsuario(editarUsuarioDto);
    }
*/
    @Delete('/:rut,/:dv')
    @ApiOperation({ summary: 'Elimiar un Usuario' })
    @ApiResponse({ status: 200, description: 'Usuario sha sido eliminado.'})
    eliminarUsuario(@Param('rut,dv') rut: number, dv:number) {
        return this.perfilDeUsuarioService.eliminarUsuario(rut,dv);
    }



}

    