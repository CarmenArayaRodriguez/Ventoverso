import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from './cliente.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@Entity()
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column({ type: 'timestamp' })
  fecha: Date;


  @ApiProperty({
    description: 'El RUT del cliente',
    example: '99.999.999-9',
  })
  @IsString()
  @IsNotEmpty({ message: 'El RUT no puede estar vacío.' })
  @MaxLength(12, { message: 'El RUT no puede tener más de 12 caracteres.' }) // Ajusta el tamaño si es necesario
  rut: string;

  @ApiProperty({
    description: 'El número de teléfono de contacto del cliente',
    example: '+56 9 9999 9999',
  })

  telefono: string;

  @ApiProperty({
    description: 'Instrumentos que el cliente desea probar',
    example: ['Clarinete Sib Schreiber', 'Instrumento 2', 'Instrumento 3'],
    type: 'array',
    items: {
      type: 'string',
    },
    maxItems: 3,
  })
  @IsString({ each: true })
  @IsNotEmpty({ each: true, message: 'La lista de instrumentos no puede estar vacía.' })
  @MaxLength(255, { each: true, message: 'El nombre del instrumento no puede tener más de 255 caracteres.' })
  instrumentos: string[];

  @ManyToOne(type => Cliente, cliente => cliente.citas)
  cliente: Cliente;
}