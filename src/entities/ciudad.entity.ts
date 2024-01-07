import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Region } from './region.entity';
import { Comuna } from './comuna.entity';

@Entity()
export class Ciudad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({ name: 'id_regionEnvio' })
    idRegionEnvio: number;

    @ManyToOne(() => Region)
    @JoinColumn({ name: 'id_regionEnvio' })
    region: Region;

    @OneToOne(() => Comuna, comuna => comuna.ciudad)
    comuna: Comuna;
}