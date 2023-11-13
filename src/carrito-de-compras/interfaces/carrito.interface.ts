import { ProductoCarrito } from '../../entities/producto-carrito.entity';

export interface ICarrito {
    id: string;
    userId: string;
    productos?: ProductoCarrito[];
}