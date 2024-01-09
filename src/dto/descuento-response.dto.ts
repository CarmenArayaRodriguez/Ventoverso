import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DescuentoResponseDTO {
    @ApiProperty({
        description: 'Monto del descuento aplicado',
        example: 20000
    })
    @IsNumber()
    montoDescuento: number;

    @ApiProperty({
        description: 'Nuevo subtotal del carrito después de aplicar el descuento',
        example: 180000
    })
    @IsNumber()
    nuevoSubtotal: number;

    @ApiProperty({
        description: 'Nuevo IVA calculado sobre el subtotal después del descuento',
        example: 36000
    })
    @IsNumber()
    nuevoIVA: number;

    @ApiProperty({
        description: 'Nuevo total a pagar después de aplicar el descuento y calcular el IVA',
        example: 216000
    })
    @IsNumber()
    nuevoTotal: number;
}
