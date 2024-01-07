import { Controller, Request, Post, Body, Get, UseGuards, Query, Param, Delete, Put } from '@nestjs/common';
import { CitaService } from 'src/services/cita.service';
import { CitaDTO } from 'src/dto/cita.dto';
import { RolesGuard } from 'src/roles.guard';
import { JWTGuard } from 'src/jwt.guard';
import { Roles } from 'src/roles.decorador';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('citas')
export class CitaController {
    constructor(private citaService: CitaService) { }

    @Get()
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('ADMINISTRADOR')
    @ApiBearerAuth('autenticacionJWT')

    async obtenerTodasLasCitas() {
        return this.citaService.obtenerTodasLasCitas();
    }

    @Get('usuario')
    @UseGuards(JWTGuard)
    @ApiBearerAuth('autenticacionJWT')
    // async obtenerCitasDeUsuario(@Query('email') email: string) {
    //     return this.citaService.obtenerCitasDeUsuario(email);
    // }
    async obtenerCitasDeUsuario(@Request() req) {
        // Este método extrae el email del usuario del request, que es obtenido del token JWT
        const emailUsuario = req.user.email;
        return this.citaService.obtenerCitasDeUsuario(emailUsuario);
    }

    @Post()
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    async crearCita(@Body() data: CitaDTO) {
        return this.citaService.crearCita(data);
    }

    @Put(':id')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    async actualizarCita(@Param('id') id: number, @Body() data: Partial<CitaDTO>) {
        return this.citaService.actualizarCita(id, data);
    }

    @Delete(':id')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    async eliminarCita(@Param('id') id: number) {
        return this.citaService.eliminarCita(id);
    }

}