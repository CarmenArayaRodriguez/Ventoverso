import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategoria } from '../entities/subcategoria.entity';
import { SubcategoriaService } from '../services/subcategoria.service';
import { SubcategoriaController } from '../controllers/subcategoria.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Subcategoria])],
    providers: [SubcategoriaService],
    controllers: [SubcategoriaController]
})
export class SubcategoriaModule { }
