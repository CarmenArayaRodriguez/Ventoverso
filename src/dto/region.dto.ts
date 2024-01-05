// export class RegionDto {
//     nombre: string;
//     codigo_postal: number;
// }
import { ApiProperty } from '@nestjs/swagger';

export class RegionDto {
    @ApiProperty({ example: 1, description: 'ID único de la región' })
    id: number;


    @ApiProperty({
        description: 'El nombre de la región',
        example: 'Región Metropolitana de Santiago'
    })
    nombre: string;

    @ApiProperty({
        description: 'El código postal de la región',
        example: 8320000
    })
    codigo_postal: number;
}