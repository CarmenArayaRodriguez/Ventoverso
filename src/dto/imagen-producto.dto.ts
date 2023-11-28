import { ApiProperty } from '@nestjs/swagger';

export class ImagenDTO {
    @ApiProperty({ description: 'Nombre del archivo de la imagen' })
    nombre: string;

    @ApiProperty({ description: 'Datos de la imagen en formato base64' })
    base64: string;
}
