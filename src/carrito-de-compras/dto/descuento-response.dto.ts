import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DescuentoResponseDTO {
    @ApiProperty({ description: 'Monto del descuento' })
    @IsNumber()
    montoDescuento: number;

    @ApiProperty({ description: 'Nuevo subtotal después del descuento' })
    @IsNumber()
    nuevoSubtotal: number;

    @ApiProperty({ description: 'Nuevo IVA después del descuento' })
    @IsNumber()
    nuevoIVA: number;

    @ApiProperty({ description: 'Nuevo total después del descuento' })
    @IsNumber()
    nuevoTotal: number;
}
