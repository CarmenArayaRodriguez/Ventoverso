import { ApiProperty } from '@nestjs/swagger';

export class CompraExitosaResponseDTO {
    @ApiProperty({ description: 'Número de pedido', example: '9999999' })
    numeroPedido: string;

    @ApiProperty({ description: 'Mensaje de agradecimiento', example: 'Gracias por preferir Ventoverso :)' })
    mensaje: string;

    @ApiProperty({ description: 'Link para descargar comprobante', example: 'https://ejemplo.com/descargar-comprobante' })
    linkDescargarComprobante: string;
}