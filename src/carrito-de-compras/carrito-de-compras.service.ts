import { Injectable } from '@nestjs/common';
import { ProductoCarrito } from './entities/producto-carrito.entity';
import { Carrito } from './entities/carrito.entity';
import { CrearCarritoDTO } from './dto/crear-carrito.dto';
import { AgregarProductoCarritoDTO } from './dto/agregar-producto-carrito.dto';
import { ActualizarProductoCarritoDTO } from './dto/actualizar-producto-carrito.dto';

@Injectable()
export class CarritoDeComprasService {
    getCarritoDeCompras(): string {
        return 'Carrito de compras';
    }


    crearCarrito(crearCarritoDto: CrearCarritoDTO): Carrito {

        return new Carrito();
    }

    agregarProducto(agregarProductoDto: AgregarProductoCarritoDTO): ProductoCarrito {

        return new ProductoCarrito();
    }
    actualizarProducto(carritoId: string, productoId: string, actualizarProductoDto: ActualizarProductoCarritoDTO): ProductoCarrito {

        return new ProductoCarrito();
    }

    eliminarProducto(carritoId: string, productoId: string): boolean {

        return true;
    }

}
