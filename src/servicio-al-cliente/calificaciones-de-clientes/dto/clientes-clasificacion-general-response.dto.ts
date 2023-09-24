import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class ClientesCalificacionGeneralResponseDTO {
    @ApiProperty()
    @IsString()
    productoId: string = uuidv4();

    @ApiProperty()
    @IsNumber()
    promedioEstrellas: number;

    @ApiProperty()
    @IsNumber()
    numeroComentarios: number;

}