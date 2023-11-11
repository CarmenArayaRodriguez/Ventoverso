import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogoSubcategoriaService } from 'src/services/catalogo-subcategoria.service';
import { CatalogoSubcategoriaController } from 'src/controllers/catalogo-subcategoria.controller';
import { Subcategoria } from 'src/entities/subcategoria.entity';
import { Producto } from 'src/entities/producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Producto, Subcategoria])],
    providers: [CatalogoSubcategoriaService],
    controllers: [CatalogoSubcategoriaController],
})
export class CatalogoSubcategoriaModule { }
