import { ApiProperty } from '@nestjs/swagger';

export class ResumenCompraDTO {
    @ApiProperty()
    subtotal: number;

    @ApiProperty()
    descuento: number;

    @ApiProperty()
    iva: number;

    @ApiProperty()
    total: number;
}

export class CrearCompraResponseDto {
    @ApiProperty()
    mensaje: string;

    @ApiProperty({ type: ResumenCompraDTO })
    resumenCompra: ResumenCompraDTO;
}
