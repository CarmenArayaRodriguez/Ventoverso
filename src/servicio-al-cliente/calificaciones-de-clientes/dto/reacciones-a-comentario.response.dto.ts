import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReaccionesAComentarioDTO {
  @ApiProperty({
    description: 'Número de veces que el comentario ha recibido un "Me Gusta".',
    default: 0,
  })
  @IsNumber()
  MeGusta: number;

  @ApiProperty({
    description: 'Número de veces que el comentario ha recibido un "No Me Gusta".',
    default: 0,
  })
  @IsNumber()
  NoMeGusta: number;

  @ApiProperty({
    description: 'Número de veces que el comentario ha sido denunciado.',
    default: 0,
  })
  @IsNumber()
  Denunciar: number;
}