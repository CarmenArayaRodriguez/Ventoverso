import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('articuloByn')
export class VentoNews {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    contenido: string;

    @Column()
    publicacion_date: Date;

    @Column()
    autor: string;

    @Column({ nullable: true })
    imagen: string;
}
