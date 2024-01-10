import { Controller, Request, Post, Body, Get, UseGuards, Query, Param, Delete, Put, Logger, NotFoundException, InternalServerErrorException } from '@nestjs/common';
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
    @ApiOperation({ summary: 'Obtener todas las citas', description: 'Devuelve una lista de todas las citas disponibles.' })
    @ApiResponse({ status: 200, description: 'Retorna todas las citas.', type: [CitaResponseDTO] })

    async obtenerTodasLasCitas() {
        return this.citaService.obtenerTodasLasCitas();
    }

    @Get('usuario')
    @UseGuards(JWTGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Obtener citas de usuario', description: 'Devuelve una lista de todas las citas para el usuario autenticado.' })
    @ApiResponse({ status: 200, description: 'Citas del usuario devueltas exitosamente', type: [CitaResponseDTO] })
    async obtenerCitasDeUsuario(@Request() req) {
        const emailUsuario = req.user.email;
        return this.citaService.obtenerCitasDeUsuario(emailUsuario);
    }

    @Post()
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiResponse({ status: 201, description: 'Cita creada', type: CitaResponseDTO })
    @ApiResponse({ status: 400, description: 'Datos inválidos para la creación de la cita' })
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
    @ApiResponse({ status: 404, description: 'Cita no encontrada' })
    @ApiResponse({ status: 400, description: 'Datos inválidos para la actualización de la cita' })
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
    @ApiOperation({ summary: 'Eliminar cita', description: 'Permite a un usuario eliminar una cita existente.' })
    @ApiResponse({ status: 200, description: 'Cita eliminada exitosamente' })
    @ApiResponse({ status: 404, description: 'Cita no encontrada' })
    async eliminarCita(@Param('id') id: number) {
        this.logger.log(`Solicitud recibida para eliminar la cita con ID: ${id}`);
        try {
            await this.citaService.eliminarCita(id);
            this.logger.log(`Cita con ID: ${id} eliminada exitosamente`);
            return { mensaje: 'Cita eliminada exitosamente' };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException('Error al eliminar la cita');
        }
    }

}