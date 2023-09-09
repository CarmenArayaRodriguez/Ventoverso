import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarritoDeComprasService } from './carrito-de-compras.service';
import { AgregarProductoCarritoDTO } from './dto/agregar-producto-carrito.dto';
import { CrearCarritoDTO } from './dto/crear-carrito.dto';
import { ActualizarProductoCarritoDTO } from './dto/actualizar-producto-carrito.dto';

@ApiTags('Carrito de compras')
@Controller('carrito-de-compras')
export class CarritoDeComprasController {

    constructor(private readonly carritoDeComprasService: CarritoDeComprasService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })

    @ApiResponse({ status: 200, description: 'La solicitud se ha procesado con éxito y la información solicitada se encuentra en la respuesta.' })
    getCarritoDeCompras(): string {
        return this.carritoDeComprasService.getCarritoDeCompras();
    }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo carrito' })
    crearCarrito(@Body() crearCarritoDto: CrearCarritoDTO) {
        return this.carritoDeComprasService.crearCarrito(crearCarritoDto);
    }

    @Post('/agregar-producto')
    @ApiOperation({ summary: 'Agregar un producto al carrito' })
    agregarProducto(@Body() agregarProductoDto: AgregarProductoCarritoDTO) {
        return this.carritoDeComprasService.agregarProducto(agregarProductoDto);
    }

    @Put('/:carritoId/producto/:productoId')
    @ApiOperation({ summary: 'Actualizar un producto en el carrito' })
    actualizarProducto(
        @Param('carritoId') carritoId: string,
        @Param('productoId') productoId: string,
        @Body() actualizarProductoDto: ActualizarProductoCarritoDTO
    ) {
        return this.carritoDeComprasService.actualizarProducto(carritoId, productoId, actualizarProductoDto);
    }

    @Delete('/:carritoId/producto/:productoId')
    @ApiOperation({ summary: 'Eliminar un producto del carrito' })
    eliminarProducto(
        @Param('carritoId') carritoId: string,
        @Param('productoId') productoId: string
    ) {
        return this.carritoDeComprasService.eliminarProducto(carritoId, productoId);
    }

}
