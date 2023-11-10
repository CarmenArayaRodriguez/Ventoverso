import { Injectable } from '@nestjs/common';
import { ProductoCarrito } from '../carrito-de-compras/entities/producto-carrito.entity';
import { Carrito } from '../carrito-de-compras/entities/carrito.entity';
import { CrearCarritoDTO } from '../dto/crear-carrito.dto';
import { AgregarProductoCarritoRequestDTO } from '../dto/agregar-producto-carrito-request.dto';
import { ActualizarProductoCarritoDTO } from '../dto/actualizar-producto-carrito.dto';

@Injectable()
export class CarritoDeComprasService {
    getCarritoDeCompras(): string {
        return 'Carrito de compras';
    }


    crearCarrito(crearCarritoDto: CrearCarritoDTO): Carrito {

        return new Carrito();
    }

    agregarProducto(agregarProductoDto: AgregarProductoCarritoRequestDTO): ProductoCarrito {

        return new ProductoCarrito();
    }
    actualizarProducto(carritoId: string, productoId: string, actualizarProductoDto: ActualizarProductoCarritoDTO): ProductoCarrito {

        return new ProductoCarrito();
    }

    eliminarProducto(carritoId: string, productoId: string): boolean {

        return true;
    }

}
