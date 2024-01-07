import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Ciudad } from './ciudad.entity';

@Entity()
export class Comuna {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    ciudadId: number;

    @OneToOne(() => Ciudad, ciudad => ciudad.comuna)
    @JoinColumn()
    ciudad: Ciudad;
}