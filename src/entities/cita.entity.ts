import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity('Agenda')
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column({ name: 'clienteRutCliente', type: 'varchar', length: 12 })
  rut: string;

  @Column({ type: 'varchar' })
  telefono: string;

  @Column("simple-array")
  instrumentos: string[];

  @Column({ type: 'timestamp' })
  fecha: Date;

  @ManyToOne(type => Cliente, cliente => cliente.citas)
  cliente: Cliente;
}