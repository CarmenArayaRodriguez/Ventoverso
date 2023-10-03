import { ApiProperty } from "@nestjs/swagger";

export class DatosPagoDTO {
    @ApiProperty({ description: 'Método de pago', example: 'Tarjeta de Crédito' })
    metodoPago: string;
}