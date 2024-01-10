import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Ciudad } from './ciudad.entity';
import { Comuna } from './comuna.entity';
import { Region } from './region.entity';
import { Compra } from './compra.entity';

@Entity('direccionEnvio')
export class DireccionEnvio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rut_cliente: string;

    // @Column()
    // direccion: string;

    @ManyToOne(() => Ciudad)
    @JoinColumn({ name: 'id_ciudad' })
    ciudad: Ciudad;

    @ManyToOne(() => Comuna)
    @JoinColumn({ name: 'id_comuna' })
    comuna: Comuna;

    @ManyToOne(() => Region)
    @JoinColumn({ name: 'id_regionEnvio' })
    regionEnvio: Region;

    @Column()
    calle_numero: string;

    @Column()
    depto_casa_oficina: string;

    @OneToMany(() => Compra, compra => compra.direccionEnvio)
    compras: Compra[];
}
