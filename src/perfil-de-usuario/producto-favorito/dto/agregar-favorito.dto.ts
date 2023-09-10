import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AgregarFavoritoDTO {
    @ApiProperty({ description: 'ID del producto favorito' })
    @IsString()
    @IsNotEmpty()
    productoId: string;
}
