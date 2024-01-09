import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Column } from 'typeorm';

export class CrearCompraDto {
    @ApiProperty({ example: '12345678-9', description: 'RUT del cliente' })
    @IsNotEmpty()
    @IsString()
    rut_cliente: string;

    @ApiProperty({
        example: 'Calle Falsa 123',
        description: 'Dirección de calle y número'
    })
    @IsString()
    @Column({ name: 'calle_numero' })
    calle_numero: string;

    @ApiProperty({
        example: 'Depto 101',
        description: 'Opcional: Detalles adicionales de la dirección como departamento, casa u oficina',
        required: false
    })
    @IsString()
    @IsOptional()
    @Column({ name: 'depto_casa_oficina', nullable: true })
    depto_casa_oficina?: string;

    @ApiProperty({
        example: 1,
        description: 'ID de la ciudad para el envío'
    })
    ciudad: number;

    @ApiProperty({
        example: 1,
        description: 'ID de la comuna para el envío'
    })
    comuna: number;

    @ApiProperty({
        example: 1,
        description: 'ID de la región para el envío'
    })
    region: number;

    @ApiProperty({
        description: 'ID del método de pago',
        example: 1
    })
    metodoPagoId: number;

    @ApiProperty({
        description: 'ID del método de envío',
        example: 1
    })
    idMetodoEnvio: number;

    @ApiProperty({
        example: 'CUPON2021',
        description: 'Opcional: Código del cupón de descuento',
        required: false
    })
    @IsOptional()
    @IsString()
    codigoCupon?: string;

    @ApiProperty({
        example: 123,
        description: 'ID del carrito de compras asociado a la compra'
    })
    carritoId: number;
}
