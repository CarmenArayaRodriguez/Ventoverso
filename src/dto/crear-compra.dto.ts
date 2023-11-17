import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CrearCompraDto {
    @ApiProperty({ example: '12345678-9', description: 'RUT del cliente' })
    @IsNotEmpty()
    @IsString()

    rut_cliente: string;
    @ApiProperty({ example: 1, description: 'ID producto' })
    @IsNotEmpty()
    @IsNumber()
    id_producto: number;

    @ApiProperty({ example: 2, description: 'Cantidad de producto' })
    @IsNotEmpty()
    @IsInt()
    cantidad: number;
}