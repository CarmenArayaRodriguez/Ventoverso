import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CrearCompraDto {
    @IsNotEmpty()
    @IsString()
    rut_cliente: string;
}