import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity('imagenProducto')
export class ImagenProducto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 300, nullable: true })
    nombre?: string;

    @Column('varchar', { length: 300, nullable: true })
    modelo?: string;

    @ManyToOne(() => Producto, producto => producto.imagenes)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @Column()
    imagen: string;
}
