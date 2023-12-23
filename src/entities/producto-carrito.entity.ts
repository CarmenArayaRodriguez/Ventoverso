import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Carrito } from './carrito.entity';
import { Producto } from './producto.entity';

@Entity('productoCarrito')
export class ProductoCarrito {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "id_carrito" })
    carritoId: number;

    @Column({ name: "id_producto" })
    productoId: number;

    @Column()
    cantidad: number;

    @ManyToOne(() => Carrito, carrito => carrito.productos)
    @JoinColumn({ name: 'id_carrito' })
    carrito: Carrito;

}
