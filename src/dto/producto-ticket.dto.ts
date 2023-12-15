import { ApiProperty } from '@nestjs/swagger';

export class ProductoTicketDTO {
    @ApiProperty({ description: 'Nombre del producto', example: 'Clarinete Sib', })
    nombre: string;

    @ApiProperty({ description: 'Cantidad comprada del producto', example: 2 })
    cantidad: number;

    @ApiProperty({ description: 'Precio del producto', example: 19990 })
    precio: number;
}
