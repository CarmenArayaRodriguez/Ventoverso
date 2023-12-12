import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity('cliente')
export class Cliente {
    @PrimaryColumn({ type: 'varchar', length: 10 })
    rut_cliente: string;

    @Column({ type: 'char', length: 1 })
    dv_cliente: string;

    @Column({ type: 'varchar', length: 50 })
    nombre: string;

    @Column({ type: 'varchar', length: 50 })
    apellido: string;

    @Column({ type: 'varchar', length: 50 })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    direccion: string;

    @Column({ type: 'varchar', length: 50 })
    ciudad: string;

    @Column({ type: 'varchar', length: 50 })
    comuna: string;

    @Column({ type: 'varchar', length: 50 })
    region: string;

    @Column({ type: 'varchar', length: 20 })
    password: string;

    @Column({ type: 'varchar', length: 20 })
    telefono: string;

    @Column("simple-array")
    roles: string[];
}
