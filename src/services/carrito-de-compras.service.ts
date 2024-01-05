import { Injectable } from '@nestjs/common';
import { ProductoCarrito } from '../entities/producto-carrito.entity';
import { Carrito } from '../entities/carrito.entity';
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
    actualizarProducto(carritoId: number, productoId: number, actualizarProductoDto: ActualizarProductoCarritoDTO): ProductoCarrito {

        return new ProductoCarrito();
    }

    eliminarProducto(carritoId: number, productoId: number): boolean {

        return true;
    }

}
