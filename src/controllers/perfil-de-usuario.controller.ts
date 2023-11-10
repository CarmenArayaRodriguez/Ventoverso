import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PerfilDeUsuarioService } from '../services/perfil-de-usuario.service';
import { AgregarFavoritoRequestDTO } from '../dto/agregar-favorito-request.dto';
import { Favorito } from '../perfil-de-usuario/producto-favorito/entities/favorito.entity';
import { CrearUsuarioDTO } from '../dto/crear-nuevo-usuario.dto';
import { EditarPostDTO } from 'src/dto/editar-post.dto';
import { EditarUsuarioDTO } from '../dto/editar-usuario.dto';
import { IngresarRequestDTO } from '../dto/ingresar-request.dto';
import { IngresarResponseDTO } from '../dto/ingresar-response.dto';
import { AgregarFavoritoResponseDTO } from '../dto/agregar-favorito-response.dto';
import { EliminarFavoritoResponseDTO } from '../dto/eliminar-favorito-response.dto';
import { EliminarFavoritoRequestDTO } from '../dto/eliminar-favorito-request.dto';

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

    @Post('/favoritos')
    @ApiOperation({ summary: 'Agregar un producto a favoritos' })
    @ApiResponse({ status: 200, description: 'Producto agregado a favoritos', type: AgregarFavoritoResponseDTO })
    agregarFavorito(@Body() agregarFavoritoDto: AgregarFavoritoRequestDTO): AgregarFavoritoResponseDTO {

        return { mensaje: 'Producto agregado a favoritos correctamente' };
    }

    @Delete('/:productoId')
    @ApiOperation({ summary: 'Eliminar un producto de favoritos' })
    @ApiResponse({
        status: 200,
        description: 'Producto eliminado de favoritos correctamente',
        type: EliminarFavoritoResponseDTO,
    })
    eliminarFavorito(
        @Param('productoId') productoId: string,
        @Body() eliminarFavoritoDto: EliminarFavoritoRequestDTO,
    ): EliminarFavoritoResponseDTO {

        return {
            mensaje: 'Producto eliminado de favoritos correctamente',
        };
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
    @ApiBody({ type: IngresarRequestDTO })
    @ApiResponse({ status: 200, type: IngresarResponseDTO, description: 'Usuario ingresado con éxito.' })
    @ApiResponse({ status: 400, description: 'Credenciales incorrectas.' })
    @HttpCode(200)
    ingresar(@Body() ingresarDTO: IngresarRequestDTO): IngresarResponseDTO {
        try {
            return this.perfilDeUsuarioService.ingresar(ingresarDTO);
        } catch (error) {
            throw new BadRequestException('Credenciales incorrectas');
        }
    }

}

