import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DescuentoRequestDTO {
    @ApiProperty({ description: 'Código de cupón de descuento.', example: 'DESC10' })
    @IsString()
    cupon: string;
}