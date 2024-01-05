import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AgregarFavoritoRequestDTO {
    @ApiProperty({ description: 'ID del producto favorito', example: 123 })
    @IsNotEmpty()
    productoId: number;
}
