import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class EliminarFavoritoRequestDTO {
    @ApiProperty({
        description: 'ID del producto a eliminar de favoritos',
        example: 'abcd-1234-efgh-5678'
    })
    @IsString()
    @IsNotEmpty()
    productoId: string;
}




