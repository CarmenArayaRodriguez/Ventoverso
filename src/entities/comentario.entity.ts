import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Producto } from './producto.entity';
import { Calificacion } from './calificacion.entity';

@Entity()
export class Comentario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreCliente: string;

    @Column()
    estrellas: number;

    @Column()
    titulo: string;

    @Column()
    comentario: string;

    @Column({ default: 0 })
    megusta: number;

    @Column({ default: 0 })
    nomegusta: number;

    @Column({ default: 0 })
    denuncias: number;

    @Column()
    id_producto: number;

    @ManyToOne(() => Producto, producto => producto.comentarios)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @OneToOne(() => Calificacion, calificacion => calificacion.comentario)
    @JoinColumn({ name: 'id_calificacion' })
    calificacion: Calificacion;

}
