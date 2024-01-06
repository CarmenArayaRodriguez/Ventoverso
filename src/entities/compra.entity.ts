import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Producto } from './producto.entity';
import { MetodoPago } from './metodo-de-pago.entity';
import { MetodoEnvio } from './metodo-de-envio.entity';
import { Carrito } from './carrito.entity';

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

    @Column('varchar', { length: 255 })
    calle_numero: string;

    @Column('varchar', { length: 255, nullable: true })
    depto_casa_oficina: string;

    @Column({ type: 'varchar', nullable: true })
    cuponUsado?: string;

}
