import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from '../entities/comentario.entity';
import { Calificacion } from 'src/entities/calificacion.entity';
import { CalificacionesService } from '../services/calificaciones.service';
import { CalificacionesController } from '../controllers/calificaciones.controller';
import { Producto } from 'src/entities/producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Calificacion, Comentario, Producto])],
    controllers: [CalificacionesController],
    providers: [CalificacionesService],
})
export class CalificacionesModule { }
