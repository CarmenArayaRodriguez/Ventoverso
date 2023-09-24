import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DetalleCalificacionGeneralResponseDTO } from './detalles-clasificacion-general-response.dto';
import { ComentarioClienteResponseDTO } from './comentario-cliente-response.dto';
import { ReaccionesAComentarioDTO } from './reacciones-a-comentario.response.dto';
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
