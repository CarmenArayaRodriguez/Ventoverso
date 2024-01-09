import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AgregarDestacadoDTO {
    @ApiProperty({ description: 'ID del producto destacado', example: 2 })
    @IsString()
    @IsNotEmpty()
    productoId: number;
}



