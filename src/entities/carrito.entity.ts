import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductoCarrito } from "./producto-carrito.entity";

@Entity('carrito')
export class Carrito {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "rut_cliente", nullable: false })
    rutCliente: string;

    @Column({ name: "status_carrito" })
    statusCarrito: string;

    @Column({ name: "creacion_date" })
    creacionDate: Date;

    @Column('int')
    subtotal: number;

    @Column({ type: 'varchar', nullable: true })
    cupon?: string;

    @OneToMany(() => ProductoCarrito, productoCarrito => productoCarrito.carrito)
    productos: ProductoCarrito[];
}
