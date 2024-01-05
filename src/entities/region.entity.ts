import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Region {
    @ApiProperty({ example: 1, description: 'ID único de la región' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Región Metropolitana de Santiago', description: 'Nombre de la región' })
    @Column()
    nombre: string;

    @ApiProperty({ example: 8320000, description: 'Código postal de la región' })
    @Column()
    codigo_postal: number;
}