import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Categoria } from './categoria.entity';
import { Subcategoria } from './subcategoria.entity';
import { Marca } from './marca.entity';
import { ImagenProducto } from './imagen.entity';
import { Calificacion } from './calificacion.entity';
import { Comentario } from './comentario.entity';

@Entity('producto')
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Categoria)
    @JoinColumn({ name: 'id_categoria' })
    categoria: Categoria;

    @ManyToOne(() => Subcategoria)
    @JoinColumn({ name: 'id_subcategoria' })
    subcategoria: Subcategoria;

    @ManyToOne(() => Marca)
    @JoinColumn({ name: 'id_marcas' })
    marca: Marca;

    @Column()
    nombre: string;

    @Column('varchar', { length: 300 })
    modelo: string;

    @Column('text')
    descripcion: string;

    @Column('varchar', { length: 255 })
    caracteristicasPrincipales: string;

    @Column('int')
    precio: number;

    @Column('int')
    stock: number;

    @Column('int', { nullable: true })
    estrellas?: number;

    @OneToMany(() => ImagenProducto, imagenProducto => imagenProducto.producto)
    imagenes: ImagenProducto[];

    @OneToMany(() => Calificacion, calificacion => calificacion.producto)
    calificaciones: Calificacion[];

    @OneToMany(() => Comentario, comentario => comentario.producto)
    comentarios: Comentario[];
}
