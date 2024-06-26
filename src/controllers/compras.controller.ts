import { Body, Controller, Post, HttpStatus, HttpException, ValidationPipe, UsePipes, UseGuards, Request, Logger } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ComprasService } from 'src/services/compras.service';
import { CrearCompraDto } from 'src/dto/crear-compra.dto';
import { CrearCompraResponseDto } from 'src/dto/crear-compra-response.dto';
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
    @ApiOperation({ summary: 'Confirmar compra', description: 'Permite a un usuario confirmar una compra, cerrando el carrito y procesando el pago.' })
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
        if (!req.user) {
            throw new HttpException('Usuario no autenticado', HttpStatus.UNAUTHORIZED);
        }
        try {
            const resultado = await this.comprasService.confirmarCompra(req.user.idCliente, datosCompra.carritoId, datosCompra, datosCompra.codigoCupon);
            this.logger.log(`Compra confirmada con éxito para el usuario con RUT: ${req.user.idCliente} y carrito ID: ${datosCompra.carritoId}.`);
            return resultado;
        } catch (e) {
            this.logger.error('Error al confirmar la compra:', e.message);
            if (e.response && e.status) {
                throw new HttpException(e.response, e.status);
            } else {
                throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
