import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PerfilDeUsuarioService } from './perfil-de-usuario.service';
import { AgregarFavoritoDTO } from './producto-favorito/dto/agregar-favorito.dto';
import { Favorito } from './producto-favorito/entities/favorito.entity';

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

}
