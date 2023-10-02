import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AgregarFavoritoRequestDTO {
    @ApiProperty({ description: 'ID del producto favorito', example: 'abcd-1234-efgh-5678' })
    @IsString()
    @IsNotEmpty()
    productoId: string;
}
