import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Producto } from './producto.entity';

@Entity('compra')
export class Compra {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: 'rut_cliente' })
    cliente: Cliente;

    @ManyToOne(() => Producto)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @Column('int')
    cantidad: number;

    @Column('int')
    total: number;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    fecha: Date;

}
