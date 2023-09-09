import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class ActualizarProductoCarritoDTO {
    @ApiProperty()
    @IsNumber()
    // @Min(1)
    cantidad: number;

    @ApiProperty()
    @IsNumber()
    // @Min(1000)
    precio: number;
}