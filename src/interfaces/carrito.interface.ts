import { ProductoCarrito } from '../entities/producto-carrito.entity';

export interface ICarrito {
    id: number;
    userId: number;
    productos?: ProductoCarrito[];
}