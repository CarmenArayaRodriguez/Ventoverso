import { Body, Controller, Post, HttpStatus, HttpException, ValidationPipe, UsePipes } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ComprasService } from 'src/services/compras.service';
import { CrearCompraDto } from 'src/dto/crear-compra.dto';
import { CrearCompraResponseDto } from 'src/dto/crear-compra-response.dto';
import { DatosEnvioDTO } from 'src/dto/datos-envio.dto';

@ApiTags('compras')
@Controller('compras')
export class ComprasController {
    constructor(private readonly comprasService: ComprasService) { }

    @Post('/confirmar')
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
        @Body() datosCompra: CrearCompraDto,

        @Body('rutCliente') rutCliente: string
    ): Promise<CrearCompraResponseDto> {
        try {
            return await this.comprasService.confirmarCompra(rutCliente, datosCompra);
        } catch (e) {
            console.error(e);
            throw new HttpException(e.response || 'Error al confirmar la compra', e.status || HttpStatus.BAD_REQUEST);
        }
    }
}
