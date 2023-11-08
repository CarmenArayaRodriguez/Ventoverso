import { ApiProperty } from "@nestjs/swagger";

export class AgregarFavoritoResponseDTO {
    @ApiProperty({ description: 'Mensaje de la operación' })
    mensaje: string;
}