import { ApiProperty } from '@nestjs/swagger';

export class ErrorPagoResponseDTO {
    @ApiProperty({ description: 'Mensaje de error', example: 'No pudimos procesar tu pago.' })
    mensajeError: string;

    @ApiProperty({ description: 'Link para volver al checkout', example: 'https://ejemplo.com/volver-al-checkout' })
    linkVolverAlCheckout: string;

    @ApiProperty({ description: 'Link al centro de ayuda', example: 'https://ejemplo.com/centro-de-ayuda' })
    linkCentroDeAyuda: string;
}
