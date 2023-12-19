import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estadoCompra')
export class EstadoCompra {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    estado: string;
}
