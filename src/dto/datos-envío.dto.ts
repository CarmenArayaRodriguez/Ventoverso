import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class DatosEnvioDTO {
    @ApiProperty({ description: 'Servicio de paquetería', example: 'Correos Chile' })
    @IsString()
    @IsNotEmpty()
    servicioPaqueteria: string;

    @ApiProperty({ description: 'Tiempo de entrega', example: '2-5 días hábiles' })
    @IsString()
    @IsNotEmpty()
    tiempoEntrega: string;

    @ApiProperty({ description: 'Costo de envío', example: 9999 })
    @IsNumber()
    @IsNotEmpty()
    costoEnvio: number;
}
