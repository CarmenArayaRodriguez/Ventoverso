import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Producto } from './producto.entity';
import { Comentario } from './comentario.entity';

@Entity('calificacion')
export class Calificacion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    caracteristicas: number;

    @Column({ type: 'int' })
    sonido: number;

    @Column({ type: 'int' })
    fabricacion: number;

    @ManyToOne(() => Producto, producto => producto.calificaciones)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;


    @OneToOne(() => Comentario, comentario => comentario.calificacion)
    @JoinColumn({ name: 'id_comentario' })
    comentario: Comentario;
}
