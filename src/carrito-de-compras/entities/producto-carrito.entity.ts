import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

export class ProductoCarrito {
    @ApiProperty()
    id: string = uuidv4();

    @ApiProperty()
    carritoId: string;

    @ApiProperty()
    productoId: string;

    @ApiProperty()
    cantidad: number;

    @ApiProperty()
    precio: number;
}