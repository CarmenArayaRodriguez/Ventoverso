import { Body, Controller, Post, HttpStatus, HttpException, ValidationPipe, UsePipes, UseGuards, Request, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ComprasService } from 'src/services/compras.service';
import { CrearCompraDto } from 'src/dto/crear-compra.dto';
import { CrearCompraResponseDto } from 'src/dto/crear-compra-response.dto';
import { DatosEnvioDTO } from 'src/dto/datos-envio.dto';
import { JWTGuard } from 'src/jwt.guard';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from 'src/roles.decorador';

@ApiTags('compras')
@Controller('compras')
export class ComprasController {
    constructor(private readonly comprasService: ComprasService) { }

    @Post('/confirmar')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Compra confirmada exitosamente',
        type: CrearCompraResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Datos de compra inválidos o carrito no encontrado/vacío',
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Error interno del servidor',
    })
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async confirmarCompra(
        @Request() req,
        @Body() datosCompra: CrearCompraDto,
        @Body('carritoId') carritoId: number
    ): Promise<CrearCompraResponseDto> {
        console.log('Info Usuario en Controlador:', req.user);
        if (!req.user) {
            throw new UnauthorizedException('Usuario no autenticado');
        }
        const rutCliente = req.user.idCliente;
        console.log('Datos recibidos:', datosCompra);
        try {
            return await this.comprasService.confirmarCompra(rutCliente, carritoId, datosCompra, datosCompra.codigoCupon);
        } catch (e) {

            console.error('Error al confirmar la compra:', e);
            if (e instanceof NotFoundException) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: e.message,
                }, HttpStatus.NOT_FOUND);
            } else {

                throw new HttpException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Error interno del servidor',
                }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
