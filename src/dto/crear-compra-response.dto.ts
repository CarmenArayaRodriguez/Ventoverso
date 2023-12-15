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
}
