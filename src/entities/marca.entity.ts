import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity('marcas')
export class Marca {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    marca: string;

    @Column({ type: 'varchar', length: 300 })
    detalle: string;

    @OneToMany(() => Producto, producto => producto.marca)
    productos: Producto[];
}