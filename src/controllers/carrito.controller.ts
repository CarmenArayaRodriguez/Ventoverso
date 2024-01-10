import { Controller, Post, Get, Patch, Delete, Param, Body, InternalServerErrorException, NotFoundException, UseGuards, Logger } from '@nestjs/common';
import { CarritoService } from 'src/services/carrito.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
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
    private readonly logger = new Logger(CarritoController.name);

    constructor(private readonly carritoService: CarritoService) { }

    @Post('/producto')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Agregar un producto al carrito' })
    @ApiResponse({ status: 201, description: 'Producto agregado al carrito.' })
    @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
    async agregarProducto(
        @Body() agregarProductoDTO: AgregarProductoCarritoRequestDTO,
        @Request() req
    ) {
        this.logger.debug('Usuario autenticado:', req.user);
        this.logger.debug('Solicitud para agregar producto recibida:', agregarProductoDTO);
        const resultado = await this.carritoService.agregarProductoAlCarrito(agregarProductoDTO);
        this.logger.log('Producto agregado al carrito', { producto: agregarProductoDTO });
        return resultado;
    }

    @Patch(':idCarrito/producto/:idProducto')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Actualizar la cantidad de un producto en el carrito' })
    @ApiResponse({ status: 200, description: 'Cantidad del producto actualizada.' })
    @ApiResponse({ status: 404, description: 'Producto o carrito no encontrado.' })
    async actualizarProducto(

        @Body() actualizarCantidadDTO: ActualizarProductoCarritoDTO,

    ) {
        this.logger.debug('Intentando actualizar producto en carrito', actualizarCantidadDTO);
        const resultado = await this.carritoService.actualizarProductoEnCarrito(actualizarCantidadDTO);

        this.logger.log('Cantidad del producto actualizada en el carrito', actualizarCantidadDTO);

        return resultado;
    }

    @Get('/:rutCliente')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Ver los productos en el carrito' })
    @ApiResponse({ status: 200, description: 'Carrito recuperado con éxito.', type: CarritoConProductosResponseDTO })
    async verCarrito(@Param('rutCliente') rutCliente: string): Promise<CarritoConProductosResponseDTO> {
        this.logger.debug('Intentando ver carrito', { rutCliente });
        const carrito = await this.carritoService.verCarrito(rutCliente);
        this.logger.log(`Carrito obtenido con éxito para cliente ${rutCliente}`, { carritoId: carrito.carritoId, productosCount: carrito.productos.length });
        return carrito;
    }

    @Delete(':idCarrito/producto/:idProducto')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Eliminar un producto del carrito' })
    @ApiResponse({ status: 200, description: 'Producto eliminado del carrito.' })
    @ApiResponse({ status: 404, description: 'Producto o carrito no encontrado.' })
    async eliminarProducto(
        @Param('idCarrito') idCarrito: number,
        @Param('idProducto') idProducto: number
    ): Promise<{ message: string }> {
        try {
            await this.carritoService.eliminarProductoDelCarrito(idCarrito, idProducto);
            this.logger.log('Producto eliminado del carrito', { idCarrito, idProducto });
            return { message: 'Producto eliminado del carrito' };
        } catch (error) {
            this.logger.error('Error al eliminar producto del carrito', { idCarrito, idProducto, error: error.message });
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
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Eliminar un carrito completo' })
    @ApiResponse({ status: 200, description: 'Carrito eliminado con éxito.' })
    @ApiResponse({ status: 404, description: 'Carrito no encontrado.' })
    async eliminarCarrito(@Param('idCarrito') idCarrito: number
    ): Promise<{ message: string }> {
        try {
            await this.carritoService.eliminarCarrito(idCarrito);
            this.logger.log('Carrito eliminado con éxito', { idCarrito });
            return { message: 'Carrito eliminado con éxito' };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Carrito no encontrado');
            } else {
                throw new InternalServerErrorException('Error al eliminar el carrito');
            }
        }
    }


    @Post('/:idCarrito/aplicar-cupon')
    @UseGuards(JWTGuard, RolesGuard)
    @Roles('USUARIO')
    @ApiBearerAuth('autenticacionJWT')
    @ApiOperation({ summary: 'Aplicar un cupón de descuento a un carrito' })
    @ApiResponse({ status: 200, description: 'Descuento aplicado con éxito', type: DescuentoResponseDTO })
    @ApiResponse({ status: 400, description: 'Datos inválidos' })
    async aplicarCupon(
        @Param('idCarrito') idCarrito: number,
        @Body() descuentoDto: DescuentoRequestDTO
    ): Promise<DescuentoResponseDTO> {
        this.logger.debug('Intentando aplicar cupón al carrito', { idCarrito, cupon: descuentoDto.cupon });
        const carrito = await this.carritoService.obtenerCarritoPorID(idCarrito);

        if (!carrito) {
            throw new NotFoundException('Carrito no encontrado');
        }

        const resultadoDescuento = await this.carritoService.aplicarDescuentoAlCarrito(carrito.subtotal, descuentoDto.cupon);
        this.logger.log('Descuento aplicado al carrito con éxito', { idCarrito, descuento: descuentoDto.cupon });
        return resultadoDescuento;
    }

}
