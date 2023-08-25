import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Perfil de usuario')
@Controller('perfil-de-usuario')
export class PerfilDeUsuarioController {
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })
    @ApiResponse({ status: 200, description: 'Perfil de usuario' })
    getPerfilDeUsuario(): string {
        return 'Perfil de usuario';
    }
}
