import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ActualizarProductoCarritoDTO {
    @ApiProperty({ example: 1 })
    @IsNumber()
    // @Min(1)
    cantidad: number;

    @ApiProperty({ example: 1000 })
    @IsNumber()
    // @Min(1000)
    precio: number;
}