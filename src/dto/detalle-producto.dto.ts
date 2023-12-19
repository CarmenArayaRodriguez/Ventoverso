import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class DetalleProductoDto {
    @ApiProperty()
    @IsInt()
    @IsOptional()
    id_producto?: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    clave: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    sistema: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cantLlaves: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    materialLlave: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    materialCuerpo: string;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    incluyeBoquilla: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cantBarriles: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    largoBarril: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    reposaPulgar: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    cantAnillos: string;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    incluyeCanas: boolean;

    @ApiProperty()
    @IsBoolean()
    @IsNotEmpty()
    incluyeMaleta: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    origen: string;
}
