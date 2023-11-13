import { Body, Controller, Delete, Get, HttpException, HttpStatus, InternalServerErrorException, NotFoundException, Param, Post, Put } from '@nestjs/common';
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
    @ApiResponse({
        status: 200,
        description: 'Detalles del producto encontrado.',

    })

    @ApiResponse({
        status: 404,
        description: 'Producto no encontrado.',
    })
    async obtenerDetalleProducto(@Param('id') id: number): Promise<ProductoDetalleResponseDTO> {
        try {
            const producto = await this.productoService.obtenerDetalleProducto(id);
            if (!producto) {
                throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
            }
            return producto;
        } catch (error) {
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo producto' })
    @ApiResponse({
        status: 201,
        description: 'Producto creado exitosamente.',

    })
    @ApiResponse({
        status: 400,
        description: 'Datos inválidos para la creación del producto.',
    })
    async crearProducto(@Body() crearProductoDto: CrearProductoDTO): Promise<{ message: string }> {
        try {
            const productoCreado = await this.productoService.crearProducto(crearProductoDto);
            return { message: 'Producto creado exitosamente' };
        } catch (error) {
            throw new HttpException('Error al crear producto', HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un producto' })
    @ApiResponse({
        status: 200,
        description: 'Producto actualizado con éxito.',

    })
    @ApiResponse({
        status: 404,
        description: 'Producto no encontrado.',
    })
    @ApiResponse({
        status: 400,
        description: 'Datos inválidos para la actualización del producto.',
    })

    async actualizarProducto(
        @Param('id') id: number,
        @Body() actualizarProductoDto: ActualizarProductoDTO
    ): Promise<{ message: string }> {
        try {
            await this.productoService.actualizarProducto(id, actualizarProductoDto);
            return { message: 'Producto actualizado con éxito' };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Producto no encontrado');
            } else {
                throw new HttpException('Error al actualizar producto', HttpStatus.BAD_REQUEST);
            }
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un producto' })
    @ApiResponse({
        status: 200,
        description: 'El producto ha sido eliminado correctamente.',
    })
    @ApiResponse({
        status: 404,
        description: 'Producto no encontrado.',
    })

    async eliminarProducto(@Param('id') id: number): Promise<{ message: string }> {
        try {
            await this.productoService.eliminarProducto(id);
            return { message: 'El producto ha sido eliminado correctamente' };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Producto no encontrado');
            } else {
                throw new InternalServerErrorException('Error al eliminar producto');
            }
        }
    }
}

