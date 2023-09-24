import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested, IsInt, Min, Max, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';
class Estrella {
    @IsInt()
    @Min(1)
    @Max(5)
    nivel: number;

    @IsInt()
    @Min(0)
    cantidad: number;
}

export class DetalleEstrellasResponseDTO {
    @ApiProperty()
    @IsString()
    productoId: string = uuidv4();

    @ApiProperty({
        type: Estrella,
        isArray: true,
        example: [{ nivel: 5, cantidad: 10 }, { nivel: 4, cantidad: 7 }]
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Estrella)
    detalleEstrellas: Estrella[];
}
