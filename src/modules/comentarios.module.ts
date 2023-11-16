import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentariosService } from '../services/comentarios.service';
import { ComentariosController } from '../controllers/comentarios.controller';
import { Comentario } from '../entities/comentario.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Comentario])],
    controllers: [ComentariosController],
    providers: [ComentariosService],
})
export class ComentariosModule { }
