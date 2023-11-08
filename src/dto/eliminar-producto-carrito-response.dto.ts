import { ApiProperty } from "@nestjs/swagger";

export class EliminarProductoCarritoResponseDTO {
    @ApiProperty({ description: 'Mensaje de confirmación' })
    mensaje: string;
}