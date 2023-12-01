import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarruselController } from 'src/controllers/carrusel.controller';
import { CarruselService } from 'src/services/carrusel.service';
import { Carrusel } from 'src/entities/carrusel.entity';
import { ImagenProducto } from '../entities/imagen-producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Carrusel, ImagenProducto])],
    controllers: [CarruselController],
    providers: [CarruselService],
})
export class CarruselModule { }
