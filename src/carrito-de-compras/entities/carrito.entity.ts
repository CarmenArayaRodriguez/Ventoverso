import { ApiProperty } from "@nestjs/swagger";
import { ProductoCarrito } from "./producto-carrito.entity";
import { v4 as uuidv4 } from 'uuid';

export class Carrito {
    @ApiProperty()
    id: string = uuidv4();

    @ApiProperty()
    userId: string;

    @ApiProperty({ type: [ProductoCarrito] })
    productos: ProductoCarrito[];
}
