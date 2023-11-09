import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductoService } from '../services/producto.service';
import { ProductoDetalleResponseDTO } from '../dto/producto-detalle-response.dto';
import { CrearProductoDTO } from '../dto/crear-producto.dto';
import { ActualizarProductoDTO } from '../dto/actualizar-producto.dto';

@ApiTags('productos')
@Controller('productos')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) { }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener detalle de un producto' })
    async obtenerDetalleProducto(@Param('id') id: number): Promise<ProductoDetalleResponseDTO> {
        return this.productoService.obtenerDetalleProducto(id);
    }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo producto' })
    async crearProducto(@Body() crearProductoDto: CrearProductoDTO): Promise<ProductoDetalleResponseDTO> {
        return this.productoService.crearProducto(crearProductoDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un producto' })
    async actualizarProducto(
        @Param('id') id: number,
        @Body() actualizarProductoDto: ActualizarProductoDTO
    ): Promise<ProductoDetalleResponseDTO> {
        return this.productoService.actualizarProducto(id, actualizarProductoDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un producto' })
    @ApiResponse({
        status: 200,
        description: 'El producto ha sido eliminado correctamente.',
    })
    async eliminarProducto(@Param('id') id: number): Promise<void> {
        return this.productoService.eliminarProducto(id);
    }
}
