import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria.entity";

@Entity('subcategoria')
export class Subcategoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    nombre: string;

    @Column({ type: 'varchar', length: 250 })
    descripcion: string;

    @Column()
    id_categoria: number;

    @Column({ nullable: true })
    imagen: string;

    @ManyToOne(() => Categoria, categoria => categoria.subcategorias)
    @JoinColumn({ name: 'id_categoria' })
    categoria: Categoria;
}


