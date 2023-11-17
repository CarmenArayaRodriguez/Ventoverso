import { ApiProperty } from '@nestjs/swagger';

export class CrearCompraResponseDto {
    @ApiProperty({ example: 'Compra realizada con éxito', description: 'Mensaje de éxito' })
    mensaje: string;
}
