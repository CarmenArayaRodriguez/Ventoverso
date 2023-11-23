import { Module } from '@nestjs/common';
import { ImagenesService } from 'src/services/imagenes.service';
import { ImagenesController } from 'src/controllers/imagenes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenProducto } from 'src/entities/imagen-producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ImagenProducto])],
    providers: [ImagenesService],
    controllers: [ImagenesController],
})
export class ImagenesModule { }
