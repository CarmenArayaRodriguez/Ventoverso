import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ResumenCompraResponseDTO {
    @ApiProperty({ description: 'Subtotal de productos' })
    @IsNumber()
    subtotalProductos: number;

    @ApiProperty({ description: 'IVA' })
    @IsNumber()
    iva: number;

    @ApiProperty({ description: 'Total de la compra' })
    @IsNumber()
    totalCompra: number;
}