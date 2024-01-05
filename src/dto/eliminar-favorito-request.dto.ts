import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class EliminarFavoritoRequestDTO {
    @ApiProperty({
        description: 'ID del producto a eliminar de favoritos',
        example: 1234
    })
    @IsNotEmpty()
    productoId: number;
}




