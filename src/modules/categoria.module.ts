import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/entities/categoria.entity';
import { CategoriaService } from 'src/services/categoria.service';
import { CategoriaController } from 'src/controllers/categoria.controller';
import { AutenticacionModule } from './autenticacion.module';

@Module({
    imports: [TypeOrmModule.forFeature([Categoria]), AutenticacionModule],
    providers: [CategoriaService],
    controllers: [CategoriaController],
})
export class CategoriaModule { }
