import { ApiProperty } from "@nestjs/swagger";

export class IngresarResponseDTO {
    @ApiProperty({ description: 'Indica si el ingreso fue exitoso', example: true })
    ingresoExitoso: boolean;

    @ApiProperty({ description: 'Mensaje para el usuario', example: 'Ingreso exitoso!' })
    mensaje: string;
}
