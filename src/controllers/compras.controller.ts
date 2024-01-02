import { Body, Controller, Post, HttpStatus, HttpException, ValidationPipe, UsePipes, UseGuards, Request, NotFoundException, UnauthorizedException, Logger } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
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
    private readonly logger = new Logger(ComprasController.name);
    constructor(private readonly comprasService: ComprasService) { }

    @Post('/confirmar')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
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
    ): Promise<CrearCompraResponseDto> {
        this.logger.log(`Iniciando proceso de confirmación de compra para el usuario con RUT: ${req.user.idCliente} y carrito ID: ${datosCompra.carritoId}.`);
        this.logger.debug('Carrito ID:', datosCompra.carritoId);
        this.logger.debug('Info Usuario en Controlador:', req.user);
        this.logger.debug('Datos recibidos para confirmar compra:', datosCompra);
        if (!req.user) {
            throw new UnauthorizedException('Usuario no autenticado');
        }
        const rutCliente = req.user.idCliente;
        const carritoId = datosCompra.carritoId;
        this.logger.debug('ConfirmarCompra - carritoId:', carritoId);

        this.logger.debug('Datos recibidos:', datosCompra);


        this.logger.debug('ConfirmarCompra - carritoId:', carritoId);

        try {
            this.logger.debug('Datos de Compra:', datosCompra);
            this.logger.debug('Carrito ID recibido en el controlador:', datosCompra.carritoId);

            const resultado = await this.comprasService.confirmarCompra(req.user.idCliente, datosCompra.carritoId, datosCompra, datosCompra.codigoCupon);
            this.logger.log(`Compra confirmada con éxito para el usuario con RUT: ${req.user.idCliente} y carrito ID: ${datosCompra.carritoId}.`);
            return resultado
        } catch (e) {

            this.logger.error('Error al confirmar la compra:', e.message);
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
