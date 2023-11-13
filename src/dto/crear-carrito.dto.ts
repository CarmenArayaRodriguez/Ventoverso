import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from 'class-validator';

export class CrearCarritoDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    rutCliente: string;
}