import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductosSimilaresController } from "src/controllers/productos-similares.controller";
import { Producto } from "src/entities/producto.entity";
import { ProductosSimilaresService } from "src/services/productos-similares.service";
import { Subcategoria } from 'src/entities/subcategoria.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Producto, Subcategoria])],
    providers: [ProductosSimilaresService],
    controllers: [ProductosSimilaresController]
})
export class ProductosSimilaresModule { }
