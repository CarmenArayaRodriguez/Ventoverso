import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DetalleProductoDto {
    @ApiProperty({
        description: 'Opcional: ID del producto',
        example: 101,
        required: false
    })
    @IsInt()
    @IsOptional()
    id_producto?: number;

    @ApiProperty({
        description: 'Clave única del detalle del producto',
        example: 'CLAVE1234'
    })
    @IsString()
    @IsNotEmpty()
    clave: string;

    @ApiProperty({
        description: 'Sistema del producto',
        example: 'Sistema Boehm'
    })
    @IsString()
    @IsNotEmpty()
    sistema: string;

    @ApiProperty({
        description: 'Cantidad de llaves del producto',
        example: '20'
    })
    @IsString()
    @IsNotEmpty()
    cantLlaves: string;

    @ApiProperty({
        description: 'Material de la llave del producto',
        example: 'Bronce'
    })
    @IsString()
    @IsNotEmpty()
    materialLlave: string;

    @ApiProperty({
        description: 'Material del cuerpo del producto',
        example: 'Plástico ABS'
    })
    @IsString()
    @IsNotEmpty()
    materialCuerpo: string;

    @ApiProperty({
        description: 'Indica si el producto incluye boquilla',
        example: true
    })
    @IsBoolean()
    @IsNotEmpty()
    incluyeBoquilla: boolean;

    @ApiProperty({
        description: 'Cantidad de barriles del producto',
        example: '2'
    })
    @IsString()
    @IsNotEmpty()
    cantBarriles: string;

    @ApiProperty({
        description: 'Largo del barril del producto',
        example: '50cm'
    })
    @IsString()
    @IsNotEmpty()
    largoBarril: string;

    @ApiProperty({
        description: 'Tipo de reposa pulgar del producto',
        example: 'Ajustable'
    })
    @IsString()
    @IsNotEmpty()
    reposaPulgar: string;

    @ApiProperty({
        description: 'Cantidad de anillos del producto',
        example: '3'
    })
    @IsString()
    @IsNotEmpty()
    cantAnillos: string;

    @ApiProperty({
        description: 'Indica si el producto incluye cañas',
        example: false
    })
    @IsBoolean()
    @IsNotEmpty()
    incluyeCanas: boolean;

    @ApiProperty({
        description: 'Indica si el producto incluye maleta',
        example: true
    })
    @IsBoolean()
    @IsNotEmpty()
    incluyeMaleta: boolean;

    @ApiProperty({
        description: 'Origen del producto',
        example: 'China'
    })
    @IsString()
    @IsNotEmpty()
    origen: string;
}
