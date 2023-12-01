import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity('imagenProducto')
export class ImagenProducto {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Producto, producto => producto.imagenes)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @Column({ name: 'nombre_imagen' })
    nombreImagen: string;

    @Column()
    imagen: string;

    @Column({ name: 'id_producto' })
    idProducto: number;
}
