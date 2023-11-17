import { Body, Controller, Post, HttpStatus, HttpException, ValidationPipe, UsePipes } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ComprasService } from 'src/services/compras.service';
import { CrearCompraDto } from 'src/dto/crear-compra.dto';
import { CrearCompraResponseDto } from 'src/dto/crear-compra-response.dto';

@ApiTags('compras')
@Controller('compras')
export class ComprasController {
    constructor(private readonly comprasService: ComprasService) { }

    @Post()
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Compra creada exitosamente',
        type: CrearCompraResponseDto,
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Datos de compra inválidos o cliente/producto no encontrado',
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Error interno del servidor',
    })
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async crearCompra(@Body() datosCompra: CrearCompraDto): Promise<CrearCompraResponseDto> {
        try {
            return await this.comprasService.crearCompra(datosCompra);
        } catch (e) {
            console.error(e);
            throw new HttpException(e.response || 'Error al procesar la compra', e.status || HttpStatus.BAD_REQUEST);
        }
    }
}
