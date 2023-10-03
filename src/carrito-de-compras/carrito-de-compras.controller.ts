import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarritoDeComprasService } from './carrito-de-compras.service';
import { AgregarProductoCarritoRequestDTO } from './dto/agregar-producto-carrito-request.dto';
import { CrearCarritoDTO } from './dto/crear-carrito.dto';
import { ActualizarProductoCarritoDTO } from './dto/actualizar-producto-carrito.dto';
import { CarritoConProductosResponseDTO } from './dto/carrito-con-productos-response.dto';
import { EliminarProductoCarritoResponseDTO } from './dto/eliminar-producto-carrito-response.dto';
import { ProductoEnCarritoResponseDTO } from './dto/producto-en-carrito-response.dto';
import { ResumenCompraResponseDTO } from './dto/resumen-compra-response.dto';

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
    private calcularResumen(productos: ProductoEnCarritoResponseDTO[]): ResumenCompraResponseDTO {
        const subtotalProductos = productos.reduce((subtotal, producto) => subtotal + producto.precio * producto.cantidad, 0);
        const iva = subtotalProductos * 0.19;
        const totalCompra = subtotalProductos + iva;

        return { subtotalProductos, iva, totalCompra };
    }

    @Post('/agregar-producto-aplicar-descuento')
    @ApiOperation({ summary: 'Agregar un producto al carrito y aplicar un descuento al carrito' })
    @ApiResponse({ status: 200, description: 'Operación exitosa', type: CarritoConProductosResponseDTO })
    agregarProductoAplicarDescuento(
        @Param('carritoId') carritoId: string,
        @Body() agregarProductoDto: AgregarProductoCarritoRequestDTO
    ): CarritoConProductosResponseDTO {
        const productos: ProductoEnCarritoResponseDTO[] = [
            {
                productoId: 'producto123',
                marca: 'Marca Ejemplo',
                modelo: 'Modelo Ejemplo',
                precio: 199000,
                cantidad: 1,
                imagenUrl: 'https://ejemplo.com/imagen.jpg'
            }
        ];

        const resumenSinDescuento = this.calcularResumen(productos);
        const porcentajeDescuento = 0.10;
        const montoDescuento = resumenSinDescuento.subtotalProductos * porcentajeDescuento;
        const nuevoSubtotal = resumenSinDescuento.subtotalProductos - montoDescuento;
        const nuevoIVA = nuevoSubtotal * 0.19;
        const nuevoTotal = nuevoSubtotal + nuevoIVA;

        const carritoConProductosMock: CarritoConProductosResponseDTO = {
            carritoId: 'carrito123',
            productos: productos,
            resumen: resumenSinDescuento,
            descuento: {
                montoDescuento,
                nuevoSubtotal,
                nuevoIVA,
                nuevoTotal
            }
        };

        return carritoConProductosMock;
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
    @ApiParam({ name: 'carritoId', description: 'ID del carrito', required: true, type: String })
    @ApiParam({ name: 'productoId', description: 'ID del producto', required: true, type: String })
    @ApiResponse({ status: 200, description: 'Producto eliminado exitosamente', type: EliminarProductoCarritoResponseDTO })
    eliminarProducto(
        @Param('carritoId') carritoId: string,
        @Param('productoId') productoId: string
    ): EliminarProductoCarritoResponseDTO {
        const respuestaMock: EliminarProductoCarritoResponseDTO = {
            mensaje: 'Producto eliminado exitosamente'
        };
        return respuestaMock;
    }
}

