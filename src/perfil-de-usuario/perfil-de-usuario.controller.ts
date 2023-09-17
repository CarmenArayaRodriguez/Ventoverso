import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PerfilDeUsuarioService } from './perfil-de-usuario.service';
import { AgregarFavoritoDTO } from './producto-favorito/dto/agregar-favorito.dto';
import { Favorito } from './producto-favorito/entities/favorito.entity';
import { CrearUsuarioDTO } from './gestion-usuario/dto/crear-nuevo-usuario.dto';
import { EditarPostDTO } from 'src/blog-y-noticias/dto/editar-post.dto';
import { EditarUsuarioDTO } from './gestion-usuario/dto/editar-usuario.dto';
import { IngresarDTO } from './ingresar/dto/ingresar.dto';

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
    @ApiOperation({ summary: 'Crear Nuevo usuario' })
    @ApiBody({ type: CrearUsuarioDTO })
    crearUsuario(@Body() crearUsuarioDTO: CrearUsuarioDTO) {
        return this.perfilDeUsuarioService.crearUsuario(crearUsuarioDTO);
    }

    /* @Put('/:rut,/:dv')
     @ApiOperation({ summary: 'Editar un Usuario' })
     @ApiResponse({ status: 200, description: 'Usuario se modifico corectamente.' })
     editar(@Param('rut') rut: number,@Param('dv') dv: number, @Body() editarUsuarioDto: EditarUsuarioDTO): string {
         return this.perfilDeUsuarioService.editarUsuario(editarUsuarioDto);
     }
 */





    @Delete('/:rut,/:dv')
    @ApiOperation({ summary: 'Elimiar un Usuario' })
    @ApiResponse({ status: 200, description: 'Usuario sha sido eliminado.' })
    eliminarUsuario(@Param('rut') rut: number, @Param('dv') dv: number) {
        return this.perfilDeUsuarioService.eliminarUsuario(rut, dv);
    }

    // Ingresar desde el home

    @Post('ingresar')
    @ApiOperation({ summary: 'Ingreso de un usuario' })
    @ApiBody({ type: IngresarDTO })
    @ApiResponse({ status: 200, description: 'Usuario ingresado con éxito.' })
    @ApiResponse({ status: 400, description: 'Credenciales incorrectas.' })
    ingresar(@Body() ingresarDTO: IngresarDTO) {
        return this.perfilDeUsuarioService.ingresar(ingresarDTO);
    }

}

