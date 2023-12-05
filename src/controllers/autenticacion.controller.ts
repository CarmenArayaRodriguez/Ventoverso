import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AutenticacionService } from 'src/services/autenticacion.service';

@Controller()
export class AutenticacionController {
    constructor(private readonly autenticacionService: AutenticacionService) { }

    @Post('login')
    @ApiOperation({ summary: 'Iniciar sesión' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                email: { type: 'string' },
                password: { type: 'string' }
            },
        },
    })
    @ApiResponse({ status: 200, description: 'Login exitoso' })
    @ApiResponse({ status: 401, description: 'Credenciales no válidas' })
    async login(@Body('email') email: string, @Body('password') password: string): Promise<any> {
        const jwt = await this.autenticacionService.validarUsuario(email, password);
        return { access_token: jwt };
    }
}
