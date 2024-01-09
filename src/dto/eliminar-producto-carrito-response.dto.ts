import { ApiProperty } from "@nestjs/swagger";

export class EliminarProductoCarritoResponseDTO {
    @ApiProperty({ description: 'Mensaje de confirmación', example: "El producto se ha eliminado del carrito" })
    mensaje: string;
}