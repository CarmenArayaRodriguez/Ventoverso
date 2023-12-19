import { Body, Controller, Delete, Get, HttpException, HttpStatus, InternalServerErrorException, NotFoundException, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductoService } from '../services/producto.service';
import { ProductoDetalleResponseDTO } from '../dto/producto-detalle-response.dto';
import { CrearProductoDTO } from '../dto/crear-producto.dto';
import { ActualizarProductoDTO } from '../dto/actualizar-producto.dto';
import { ProductoMapper } from 'src/mappers/producto.mapper';
import { ProductoCatalogoSubcategoriaResponseDTO } from 'src/dto/producto-catalogo-subcategoria.dto';
import { JWTGuard } from 'src/jwt.guard';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from 'src/roles.decorador';
import { FileInterceptor } from '@nestjs/platform-express';
import { DetalleProductoDto } from 'src/dto/detalle-producto.dto';


@ApiTags('productos')
@Controller('productos')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) { }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener detalle de un producto' })
    @ApiResponse({
        status: 200,
        description: 'Detalles del producto encontrado.',
        type: [ProductoDetalleResponseDTO]

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
            if (error instanceof HttpException && error.getStatus() === HttpStatus.NOT_FOUND) {
                throw error;
            }
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('ADMINISTRADOR')
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
        console.log(crearProductoDto.detalles);
        try {
            const productoCreado = await this.productoService.crearProducto(crearProductoDto);
            return { message: 'Producto creado exitosamente' };
        } catch (error) {
            throw new HttpException('Error al crear producto', HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('ADMINISTRADOR')
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
        @Body() actualizarProductoDto: ActualizarProductoDTO,
    ): Promise<{ message: string }> {
        console.log('DTO recibido:', actualizarProductoDto);
        try {
            console.log('Datos recibidos para actualizar:', actualizarProductoDto);

            await this.productoService.actualizarProducto(id, actualizarProductoDto);

            console.log('Producto actualizado con éxito');
            return { message: 'Producto actualizado con éxito' };
        } catch (error) {
            console.error('Error al actualizar producto:', error);
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Producto no encontrado');
            } else {
                throw new HttpException('Error al actualizar producto', HttpStatus.BAD_REQUEST);
            }
        }
    }

    @Delete(':id')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('ADMINISTRADOR')
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

    @Get('/categoria/:idCategoria')
    @ApiOperation({ summary: 'Obtener productos por categoría' })
    @ApiResponse({
        status: 200,
        description: 'Productos de la categoría obtenidos exitosamente.',
        type: [ProductoCatalogoSubcategoriaResponseDTO]
    })
    @ApiResponse({
        status: 404,
        description: 'Categoría no encontrada.',
    })
    async obtenerProductosPorCategoria(@Param('idCategoria') idCategoria: number): Promise<ProductoCatalogoSubcategoriaResponseDTO[]> {
        return await this.productoService.obtenerProductosPorCategoria(idCategoria);
    }


}

