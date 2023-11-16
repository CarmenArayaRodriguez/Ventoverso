import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Producto } from './producto.entity';

@Entity()
export class Carrusel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    nombre: string;

    @Column({ length: 250 })
    descripcion: string;

    @Column()
    fechainicio: Date;

    @Column()
    fechafin: Date;

    @Column({ length: 250, nullable: true })
    imagenUrl: string;

    @ManyToMany(() => Producto)
    @JoinTable({
        name: 'carruselProducto',
        joinColumn: { name: 'id_carrusel', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_producto', referencedColumnName: 'id' }
    })
    productos: Producto[];
}
