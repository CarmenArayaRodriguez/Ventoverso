import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ResumenCompraResponseDTO {
    @ApiProperty({ description: 'Subtotal de productos', example: 3 })
    @IsNumber()
    subtotalProductos: number;

    @ApiProperty({ description: 'IVA', example: 250000 })
    @IsNumber()
    iva: number;

    @ApiProperty({ description: 'Total de la compra', example: 400000 })
    @IsNumber()
    totalCompra: number;
}