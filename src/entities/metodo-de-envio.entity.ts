import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('metodoEnvio')
export class MetodoEnvio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column({ name: 'costo_envio' })
    costoEnvio: number;
}
