import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsEmail, IsOptional } from 'class-validator';

export class DatosEnvioDTO {
    @ApiProperty({ description: 'Nombre del destinatario', example: 'Juan Pérez' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Apellido del destinatario', example: 'Doe' })
    @IsString()
    @IsNotEmpty()
    apellido: string;

    @ApiProperty({ description: 'RUT del destinatario', example: '12345678-9' })
    @IsString()
    @IsNotEmpty()
    rut: string;

    @ApiProperty({ description: 'Correo electrónico', example: 'juan.perez@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Dirección de envío', example: 'Calle Falsa 123' })
    @IsString()
    @IsNotEmpty()
    direccion: string;

    @ApiProperty({ description: 'Información adicional de la dirección', example: 'Departamento 401' })
    @IsString()
    @IsOptional()
    informacionAdicional: string;

    @ApiProperty({ description: 'Región de envío', example: 'Región Metropolitana' })
    @IsString()
    @IsNotEmpty()
    region: string;

    @ApiProperty({ description: 'Ciudad de envío', example: 'Santiago' })
    @IsString()
    @IsOptional()
    ciudad: string;

    @ApiProperty({ description: 'Comuna de envío', example: 'Las Condes' })
    @IsString()
    @IsOptional()
    comuna: string;

    @ApiProperty({ description: 'Teléfono de contacto', example: '+56912345678' })
    @IsString()
    @IsNotEmpty()
    telefono: string;

    @ApiProperty({ description: 'Servicio de paquetería', example: 'Correos Chile' })
    @IsString()
    @IsNotEmpty()
    opcionEnvio: string;

    @ApiProperty({ description: 'Tiempo de entrega', example: '2-5 días hábiles' })
    @IsString()
    @IsNotEmpty()
    tiempoEntrega: string;

    @ApiProperty({ description: 'Costo de envío', example: 9999 })
    @IsNumber()
    @IsNotEmpty()
    costoEnvio: number;
}
