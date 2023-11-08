import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max, IsString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class DetalleCalificacionGeneralResponseDTO {
    @ApiProperty()
    @IsString()
    productoId: string = uuidv4();

    @ApiProperty()
    @IsInt()
    @Min(1)
    @Max(5)
    estrellas: number;

    @ApiProperty()
    @IsInt()
    @Min(0)
    cantidad: number;
}
