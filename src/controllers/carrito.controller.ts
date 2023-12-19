import { Controller, Post, Get, Patch, Delete, Param, Body, Res, HttpStatus, InternalServerErrorException, NotFoundException, UseGuards } from '@nestjs/common';
import { CarritoService } from 'src/services/carrito.service';
import { CrearCarritoDTO } from '../dto/crear-carrito.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AgregarProductoCarritoRequestDTO } from 'src/dto/agregar-producto-carrito-request.dto';
import { ActualizarProductoCarritoDTO } from 'src/dto/actualizar-producto-carrito.dto';
import { JWTGuard } from 'src/jwt.guard';
import { Request } from '@nestjs/common';
import { CarritoConProductosResponseDTO } from 'src/dto/carrito-con-productos-response.dto';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from 'src/roles.decorador';
import { DescuentoResponseDTO } from 'src/dto/descuento-response.dto';
import { DescuentoRequestDTO } from 'src/dto/descuento-request.dto';

@Controller('carrito')
export class CarritoController {
    constructor(private readonly carritoService: CarritoService) { }

    @Post()
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiOperation({ summary: 'Crear un nuevo carrito' })
    @ApiResponse({ status: 201, description: 'Carrito creado con éxito.' })
    @ApiResponse({ status: 400, description: 'Datos inválidos.' })
    async crearCarrito(@Body() crearCarritoDTO: CrearCarritoDTO) {
        console.log('crearCarrito Controller - rutCliente:', crearCarritoDTO.rutCliente);
        return this.carritoService.crearCarrito(crearCarritoDTO.rutCliente);
    }

    @Post('/producto')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiOperation({ summary: 'Agregar un producto al carrito' })
    @ApiResponse({ status: 201, description: 'Producto agregado al carrito.' })
    @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
    async agregarProducto(
        @Body() agregarProductoDTO: AgregarProductoCarritoRequestDTO,
        @Request() req
    ) {
        console.log('Usuario autenticado:', req.user);
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

    @Get('/:rutCliente')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiOperation({ summary: 'Ver los productos en el carrito' })
    @ApiResponse({ status: 200, description: 'Carrito recuperado con éxito.', type: CarritoConProductosResponseDTO })
    async verCarrito(@Param('rutCliente') rutCliente: string): Promise<CarritoConProductosResponseDTO> {
        return await this.carritoService.verCarrito(rutCliente);
    }

    @Delete(':idCarrito/producto/:idProducto')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
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
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
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
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    async obtenerCarrito(@Request() req) {
        const rutCliente = req.user.rutCliente;
        return this.carritoService.obtenerCarritoPorCliente(rutCliente);
    }

    @Post('/:idCarrito/aplicar-cupon')
    @ApiOperation({ summary: 'Aplicar un cupón de descuento a un carrito' })
    @ApiResponse({ status: 200, description: 'Descuento aplicado con éxito', type: DescuentoResponseDTO })
    @ApiResponse({ status: 400, description: 'Datos inválidos' })
    async aplicarCupon(
        @Param('idCarrito') idCarrito: number,
        // @Body('cupon') cupon: string
        @Body() descuentoDto: DescuentoRequestDTO
    ): Promise<DescuentoResponseDTO> {

        const carrito = await this.carritoService.obtenerCarritoPorID(idCarrito);

        if (!carrito) {
            throw new NotFoundException('Carrito no encontrado');
        }

        return this.carritoService.aplicarDescuentoAlCarrito(carrito.subtotal, descuentoDto.cupon);
    }

}
