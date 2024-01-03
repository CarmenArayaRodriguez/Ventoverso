import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, HttpCode } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PerfilDeUsuarioService } from '../services/perfil-de-usuario.service';
import { AgregarFavoritoRequestDTO } from '../dto/agregar-favorito-request.dto';
import { AgregarFavoritoResponseDTO } from '../dto/agregar-favorito-response.dto';
import { CrearUsuarioDTO } from '../dto/crear-nuevo-usuario.dto';
import { EditarUsuarioDTO } from '../dto/editar-usuario.dto';
import { IngresarRequestDTO } from '../dto/ingresar-request.dto';
import { IngresarResponseDTO } from '../dto/ingresar-response.dto';
import { EliminarFavoritoResponseDTO } from '../dto/eliminar-favorito-response.dto';

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

    // Producto Favorito
    @Post('/favoritos')
    @ApiOperation({ summary: 'Agregar un producto a favoritos' })
    @ApiResponse({ status: 200, description: 'Producto agregado a favoritos', type: AgregarFavoritoResponseDTO })
    agregarFavorito(@Body() agregarFavoritoDto: AgregarFavoritoRequestDTO): AgregarFavoritoResponseDTO {

        return this.perfilDeUsuarioService.agregarFavorito(agregarFavoritoDto);
    }

    @Delete('/favoritos/:productoId')
    @ApiOperation({ summary: 'Eliminar un producto de favoritos' })
    @ApiResponse({ status: 200, description: 'Producto eliminado de favoritos correctamente', type: EliminarFavoritoResponseDTO })
    eliminarFavorito(@Param('productoId') productoId: number): EliminarFavoritoResponseDTO {
        return { mensaje: `Producto con ID ${productoId} eliminado de favoritos` };
    }

    //Gestion de usuario
    @Post('/usuario')
    @ApiOperation({ summary: 'Crear Nuevo usuario' })
    @ApiBody({ type: CrearUsuarioDTO })
    @ApiResponse({ status: 201, description: 'Usuario creado exitosamente' })
    crearUsuario(@Body() crearUsuarioDTO: CrearUsuarioDTO) {
        return this.perfilDeUsuarioService.crearUsuario(crearUsuarioDTO);
    }

    @Put('/usuario/:rut')
    @ApiOperation({ summary: 'Editar un Usuario' })
    @ApiResponse({ status: 200, description: 'Usuario modificado correctamente.' })
    editarUsuario(@Param('rut') rut: string, @Body() editarUsuarioDto: EditarUsuarioDTO): string {
        return this.perfilDeUsuarioService.editarUsuario(rut, editarUsuarioDto);
    }



    @Delete('/usuario/:rut')
    @ApiOperation({ summary: 'Eliminar un Usuario' })
    @ApiResponse({ status: 200, description: 'Usuario ha sido eliminado.' })
    eliminarUsuario(@Param('rut') rut: string) {
        return this.perfilDeUsuarioService.eliminarUsuario(rut);
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

