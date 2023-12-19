import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Producto } from './producto.entity';

@Entity('detalle_producto')
export class DetalleProducto {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Producto, producto => producto.detalleProducto)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @Column({ type: 'varchar', length: 255 })
    clave: string;

    @Column({ type: 'varchar', length: 255 })
    sistema: string;

    @Column({ type: 'varchar', length: 255, name: 'cantLlaves' })
    cantLlaves: string;

    @Column({ type: 'varchar', length: 255, name: 'materialLlave' })
    materialLlave: string;

    @Column({ type: 'varchar', length: 255, name: 'materialCuerpo' })
    materialCuerpo: string;

    @Column({ type: 'boolean', name: 'incluyeBoquilla' })
    incluyeBoquilla: boolean;

    @Column({ type: 'varchar', length: 255, name: 'cantBarriles' })
    cantBarriles: string;

    @Column({ type: 'varchar', length: 255, name: 'largoBarril' })
    largoBarril: string;

    @Column({ type: 'varchar', length: 255, name: 'reposaPulgar' })
    reposaPulgar: string;

    @Column({ type: 'varchar', length: 255, name: 'cantAnillos' })
    cantAnillos: string;

    @Column({ type: 'boolean', name: 'incluyeCanas' })
    incluyeCanas: boolean;

    @Column({ type: 'boolean', name: 'incluyeMaleta' })
    incluyeMaleta: boolean;

    @Column({ type: 'varchar', length: 255 })
    origen: string;
}
