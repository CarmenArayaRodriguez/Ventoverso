import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Producto } from './producto.entity';
import { MetodoPago } from './metodo-de-pago.entity';
import { MetodoEnvio } from './metodo-de-envio.entity';
import { Carrito } from './carrito.entity';
import { DireccionEnvio } from './direccion-envio.entity';

@Entity('compra')
export class Compra {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: 'rut_cliente' })
    cliente: Cliente;


    @Column('int')
    total: number;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    fecha: Date;

    @ManyToOne(() => MetodoPago)
    @JoinColumn({ name: 'id_metodo_pago' })
    metodoPago: MetodoPago;

    @ManyToOne(() => MetodoEnvio)
    @JoinColumn({ name: 'id_metodo_envio' })
    metodoEnvio: MetodoEnvio;

    @Column({ type: 'varchar', nullable: true })
    cuponUsado?: string;

    @ManyToOne(() => DireccionEnvio, direccionEnvio => direccionEnvio.compras)
    @JoinColumn({ name: 'id_direccionEnvio' })
    direccionEnvio: DireccionEnvio;

}
