import { Controller, Post, Get, Patch, Delete, Param, Body, Res, HttpStatus, InternalServerErrorException, NotFoundException, UseGuards } from '@nestjs/common';
import { CarritoService } from 'src/services/carrito.service';
import { CrearCarritoDTO } from '../dto/crear-carrito.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AgregarProductoCarritoRequestDTO } from 'src/dto/agregar-producto-carrito-request.dto';
import { ActualizarProductoCarritoDTO } from 'src/dto/actualizar-producto-carrito.dto';
import { JWTGuard } from 'src/jwt.guard';
import { Request } from '@nestjs/common';

@Controller('carrito')
export class CarritoController {
    constructor(private readonly carritoService: CarritoService) { }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo carrito' })
    @ApiResponse({ status: 201, description: 'Carrito creado con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    async crearCarrito(@Param() crearCarritoDTO: CrearCarritoDTO) {
        console.log('crearCarrito Controller - rutCliente:', crearCarritoDTO.rutCliente);
        return this.carritoService.crearCarrito(crearCarritoDTO.rutCliente);
    }

    @Post('/producto')
    @ApiOperation({ summary: 'Agregar un producto al carrito' })
    @ApiResponse({ status: 201, description: 'Producto agregado al carrito.' })
    @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
    async agregarProducto(
        @Body() agregarProductoDTO: AgregarProductoCarritoRequestDTO,
    ) {
        console.log('Solicitud para agregar producto recibida:');
        console.log(agregarProductoDTO);
        return this.carritoService.agregarProductoAlCarrito(agregarProductoDTO);
    }

    @Patch(':idCarrito/producto/:idProducto')
    @ApiOperation({ summary: 'Actualizar la cantidad de un producto en el carrito' })
    @ApiResponse({ status: 200, description: 'Cantidad del producto actualizada.' })
    @ApiResponse({ status: 404, description: 'Producto o carrito no encontrado.' })
    async actualizarProducto(

        @Body() actualizarCantidadDTO: ActualizarProductoCarritoDTO,

    ) {
        return this.carritoService.actualizarProductoEnCarrito(actualizarCantidadDTO);
    }


    @Delete(':idCarrito/producto/:idProducto')
    @ApiOperation({ summary: 'Eliminar un producto del carrito' })
    @ApiResponse({ status: 200, description: 'Producto eliminado del carrito.' })
    @ApiResponse({ status: 404, description: 'Producto o carrito no encontrado.' })
    async eliminarProducto(
        @Param('idCarrito') idCarrito: number,
        @Param('idProducto') idProducto: number
    ): Promise<{ message: string }> {
        try {
            await this.carritoService.eliminarProductoDelCarrito(idCarrito, idProducto);
            return { message: 'Producto eliminado del carrito' };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Producto o carrito no encontrado');
            } else {
                throw new InternalServerErrorException('Error al eliminar producto del carrito');
            }
        }

    }

    @Delete(':idCarrito')
    @ApiOperation({ summary: 'Eliminar un carrito completo' })
    @ApiResponse({ status: 200, description: 'Carrito eliminado con éxito.' })
    @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
    async eliminarCarrito(@Param('idCarrito') idCarrito: number
    ): Promise<{ message: string }> {
        try {
            await this.carritoService.eliminarCarrito(idCarrito);
            return { message: 'Carrito eliminado con éxito' };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Carrito no encontrado');
            } else {
                throw new InternalServerErrorException('Error al eliminar el carrito');
            }
        }
    }

    @Get('/carrito')
    @UseGuards(JWTGuard)
    async obtenerCarrito(@Request() req) {
        const rutCliente = req.user.rutCliente;
        return this.carritoService.obtenerCarritoPorCliente(rutCliente);
    }

}
