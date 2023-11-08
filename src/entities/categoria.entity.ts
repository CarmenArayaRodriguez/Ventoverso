import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subcategoria } from './subcategoria.entity';
import { Producto } from './producto.entity';

@Entity('categoria')
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ type: 'varchar', length: 250 })
    descripcion: string;

    @OneToMany(() => Subcategoria, subcategoria => subcategoria.categoria)
    subcategorias: Subcategoria[];

    @OneToMany(() => Producto, producto => producto.categoria)
    productos: Producto[];
}