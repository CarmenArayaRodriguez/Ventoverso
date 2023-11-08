import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Categoria } from './categoria.entity';
import { Subcategoria } from './subcategoria.entity';
import { Marca } from './marca.entity';
import { ImagenProducto } from './imagen.entity';

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

    @Column('text')
    descripcion: string;

    @Column('int')
    precio: number;

    @Column('int')
    stock: number;

    @OneToMany(() => ImagenProducto, imagenProducto => imagenProducto.producto)
    imagenes: ImagenProducto[];
}
