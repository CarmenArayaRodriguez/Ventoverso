import { ApiProperty } from '@nestjs/swagger';

export class DetallesCompraDto {
    @ApiProperty({ example: 100, description: 'Subtotal de la compra' })
    subtotal: number;

    @ApiProperty({ example: 10, description: 'Descuento aplicado' })
    descuento: number;

    @ApiProperty({ example: 19, description: 'IVA aplicado' })
    iva: number;

    @ApiProperty({ example: 109, description: 'Total de la compra' })
    total: number;
}

export class CrearCompraResponseDto {
    @ApiProperty({ example: 'Compra realizada con éxito', description: 'Mensaje de éxito' })
    mensaje: string;

    @ApiProperty({ type: DetallesCompraDto })
    resumenCompra: DetallesCompraDto;
}
