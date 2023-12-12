import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { DireccionEnvioDto } from './direccion-envio.dto';

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

    @ApiProperty({ description: 'Total de la compra' })
    total: number;

    // @ApiProperty({ description: 'Dirección de envío' })
    // direccionEnvio?: string;

    // @ApiProperty({ description: 'Método de pago', example: 'Tarjeta de Crédito' })
    // metodoPago?: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // direccion: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // comuna: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // ciudad: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // region: string;
    @ApiProperty({ type: () => DireccionEnvioDto })
    direccionEnvio: DireccionEnvioDto;

    @ApiProperty({ description: 'ID del método de pago', example: 1 })
    metodoPagoId: number;

    @ApiProperty({ description: 'ID del método de envio', example: 1 })
    idMetodoEnvio: number;
}