import { ApiProperty } from '@nestjs/swagger';

export class ResumenCompraDTO {
    @ApiProperty({
        description: 'Subtotal de la compra antes de descuentos e impuestos',
        example: 1000000
    })
    subtotal: number;

    @ApiProperty({
        description: 'Monto total de los descuentos aplicados a la compra',
        example: 100000
    })
    descuento: number;

    @ApiProperty({
        description: 'Monto total del IVA aplicado a la compra',
        example: 1900000
    })
    iva: number;

    @ApiProperty({
        description: 'Total final a pagar, incluyendo descuentos e impuestos',
        example: 109000
    })
    total: number;
}

export class CrearCompraResponseDto {
    @ApiProperty({
        description: 'Mensaje de confirmación de la compra',
        example: 'Compra realizada con éxito'
    })
    mensaje: string;

    @ApiProperty({
        description: 'Resumen detallado de la compra realizada',
        type: ResumenCompraDTO
    })
    resumenCompra: ResumenCompraDTO;
}
