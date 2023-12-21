import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { DireccionEnvioDto } from './direccion-envio.dto';
import { Column } from 'typeorm';

export class CrearCompraDto {
    @ApiProperty({ example: '12345678-9', description: 'RUT del cliente' })
    @IsNotEmpty()
    @IsString()
    rut_cliente: string;

    @ApiProperty()
    @IsString()
    @Column({ name: 'calle_numero' })
    calle_numero: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Column({ name: 'depto_casa_oficina', nullable: true })
    depto_casa_oficina?: string;

    @ApiProperty()
    @IsString()
    ciudad: string;

    @ApiProperty()
    @IsString()
    comuna: string;

    @ApiProperty()
    @IsString()
    region: string;

    @ApiProperty({ description: 'ID del método de pago', example: 1 })
    metodoPagoId: number;

    @ApiProperty({ description: 'ID del método de envio', example: 1 })
    idMetodoEnvio: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    codigoCupon?: string;

    @ApiProperty()
    carritoId: number;
}