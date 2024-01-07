import { Controller, Request, Post, Body, Get, UseGuards, Query, Param, Delete, Put, Logger } from '@nestjs/common';
import { CitaService } from 'src/services/cita.service';
import { CitaDTO } from 'src/dto/cita.dto';
import { RolesGuard } from 'src/roles.guard';
import { JWTGuard } from 'src/jwt.guard';
import { Roles } from 'src/roles.decorador';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CitaResponseDTO } from 'src/dto/cita-response.dto';

@Controller('citas')
export class CitaController {
    private readonly logger = new Logger(CitaController.name);

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
    async obtenerCitasDeUsuario(@Request() req) {
        const emailUsuario = req.user.email;
        return this.citaService.obtenerCitasDeUsuario(emailUsuario);
    }

    @Post()
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiResponse({ status: 201, description: 'Cita creada', type: CitaResponseDTO })
    async crearCita(@Body() data: CitaDTO): Promise<CitaResponseDTO> {
        this.logger.log(`Solicitud para crear  nueva cita recibida`);
        return this.citaService.crearCita(data);
    }

    @Put(':id')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Actualizar una cita' })
    @ApiResponse({ status: 200, description: 'Cita actualizada', type: CitaDTO })
    @ApiBody({ type: CitaDTO })
    async actualizarCita(
        @Param('id') id: number,
        @Body() data: CitaDTO
    ) {
        this.logger.log(`Solicitud recibida para actualizar la cita con ID: ${id}`);
        const actualizaCita = await this.citaService.actualizarCita(id, data);
        this.logger.log(`Cita con ID: ${id} actualizada exitosamente`);
        return actualizaCita;
    }
    @Delete(':id')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    async eliminarCita(@Param('id') id: number) {
        this.logger.log(`Solicitud recibida para eliminar la cita con ID: ${id}`);
        await this.citaService.eliminarCita(id);
        this.logger.log(`Cita con ID: ${id} eliminada exitosamente`);
    }

}