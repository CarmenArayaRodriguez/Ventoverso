import { Controller, Post, Body, HttpException, HttpStatus, Put, Param, Delete, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CrearUsuarioDTO } from 'src/dto/crear-nuevo-usuario.dto';
import { Cliente } from 'src/entities/cliente.entity';
import { JWTGuard } from 'src/jwt.guard';
import { Roles } from 'src/roles.decorador';
import { RolesGuard } from 'src/roles.guard';
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

    @Post('registrar')
    @ApiOperation({ summary: 'Registrar nuevo usuario' })
    @ApiBody({ description: 'Datos de registro del usuario', type: CrearUsuarioDTO })
    @ApiResponse({ status: 201, description: 'Usuario registrado' })
    @ApiResponse({ status: 400, description: 'Datos inválidos' })
    async registrar(@Body() datosRegistro: CrearUsuarioDTO): Promise<any> {
        try {
            return await this.autenticacionService.registrarUsuario(datosRegistro);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('actualizar/:rut')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Actualizar usuario' })
    @ApiParam({ name: 'rut', type: 'string', description: 'RUT del usuario' })
    @ApiBody({ description: 'Datos para actualizar', type: CrearUsuarioDTO })
    @ApiResponse({ status: 200, description: 'Usuario actualizado' })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
    async actualizar(@Param('rut') rut_cliente: string, @Body() datosUsuario) {
        try {
            return await this.autenticacionService.actualizarUsuario(rut_cliente, datosUsuario);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete('eliminar/:rut')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Eliminar usuario' })
    @ApiParam({ name: 'rut', type: 'string', description: 'RUT del usuario' })
    @ApiResponse({ status: 200, description: 'Usuario eliminado' })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
    async eliminar(@Param('rut') rut_cliente: string) {
        try {
            await this.autenticacionService.eliminarUsuario(rut_cliente);
            return { message: 'Usuario eliminado' };
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('usuario/:rut')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Obtener datos de un usuario' })
    @ApiParam({ name: 'rut', type: 'string', description: 'RUT del usuario' })
    @ApiResponse({ status: 200, description: 'Datos del usuario', type: CrearUsuarioDTO })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
    async obtenerUsuario(@Param('rut') rut_cliente: string) {
        try {
            return await this.autenticacionService.obtenerUsuarioPorRut(rut_cliente);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('usuarios')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('ADMINISTRADOR')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Obtener todos los usuarios' })
    @ApiResponse({ status: 200, description: 'Lista de todos los usuarios', type: [CrearUsuarioDTO] })
    async obtenerTodosLosUsuarios() {
        try {
            return await this.autenticacionService.obtenerTodosLosUsuarios();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

