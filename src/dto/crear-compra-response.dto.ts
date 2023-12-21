import { ApiProperty } from '@nestjs/swagger';
import { ProductoTicketDTO } from './producto-ticket.dto';

export class CrearCompraResponseDto {
    @ApiProperty({ example: 'Compra realizada con éxito', description: 'Mensaje de éxito' })
    mensaje: string;

    @ApiProperty({ type: () => ProductoTicketDTO, isArray: true, description: 'Detalles de los productos en el ticket de compra' })
    productos?: ProductoTicketDTO[];

    @ApiProperty({ example: 12345, description: 'ID del pedido' })
    idPedido?: number;

    @ApiProperty({ example: 39980, description: 'Total de la compra' })
    total?: number;

    @ApiProperty({ example: 35000, description: 'Subtotal de la compra antes de aplicar descuentos' })
    subtotal?: number;

    @ApiProperty({ example: 5000, description: 'Monto del descuento aplicado' })
    montoDescuento?: number;

    @ApiProperty({ example: 6650, description: 'IVA aplicado sobre el total' })
    IVA?: number;
}
