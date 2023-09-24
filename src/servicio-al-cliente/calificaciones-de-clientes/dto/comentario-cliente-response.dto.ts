import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, Min, Max, IsInt, IsObject, ValidateNested } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
import { ReaccionesAComentarioDTO } from './reacciones-a-comentario.response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ComentarioClienteResponseDTO {
    @ApiProperty()
    @IsString()
    productoId: string = uuidv4();

    @ApiProperty()
    @IsNotEmpty()
    cliente: string = uuidv4();

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fotoClienteUrl: string;

    @ApiProperty()
    @IsInt()
    @Min(1)
    @Max(5)
    estrellas: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    texto: string;

    @ApiProperty({ type: ReaccionesAComentarioDTO, example: { MeGusta: 5, NoMeGusta: 2, Denunciar: 0 } })
    @IsObject()
    @ValidateNested({ each: true })
    @Type(() => ReaccionesAComentarioDTO)
    reacciones: ReaccionesAComentarioDTO;
}
