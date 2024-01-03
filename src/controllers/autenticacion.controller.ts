import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AutenticacionService } from 'src/services/autenticacion.service';

@Controller('auth')
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
        try {
            const jwt = await this.autenticacionService.validarUsuario(email, password);
            if (!jwt) {
                throw new HttpException('Credenciales no válidas', HttpStatus.UNAUTHORIZED);
            }
            return { access_token: jwt };
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
