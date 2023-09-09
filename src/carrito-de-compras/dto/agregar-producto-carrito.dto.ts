import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class AgregarProductoCarritoDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    carritoId: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    productoId: string;

    @ApiProperty()
    @IsNumber()
    // @Min(1)
    cantidad: number;
}