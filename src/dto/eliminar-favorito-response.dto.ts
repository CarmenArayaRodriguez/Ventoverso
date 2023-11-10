import { ApiProperty } from '@nestjs/swagger';

export class EliminarFavoritoResponseDTO {
    @ApiProperty({
        description: 'Mensaje que confirma la eliminación del producto de favoritos',
        example: 'Producto eliminado de favoritos correctamente'
    })
    mensaje: string;
}