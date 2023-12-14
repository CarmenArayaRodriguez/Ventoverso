import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Compra } from "./compra.entity";
import { Producto } from "./producto.entity";

@Entity('detalleCompra')
export class DetalleCompra {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Compra)
    @JoinColumn({ name: 'id_compra' })
    compra: Compra;

    @ManyToOne(() => Producto)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @Column('int')
    cantidad: number;

    @Column('int')
    precio: number;
}
