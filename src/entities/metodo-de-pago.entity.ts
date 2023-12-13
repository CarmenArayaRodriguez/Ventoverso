import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('metodoPago')
export class MetodoPago {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nombre_metodo_pago' })
    nombreMetodoPago: string;

    @Column('varchar', { name: 'detalle_metodo_pago' })
    detalleMetodoPago: string;
}
