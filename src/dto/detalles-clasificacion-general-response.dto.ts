import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max, IsString } from 'class-validator';

export class DetalleCalificacionGeneralResponseDTO {
    @ApiProperty()
    @IsString()
    productoId: number;

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
