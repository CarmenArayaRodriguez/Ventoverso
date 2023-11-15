import { Module } from '@nestjs/common';
import { CatalogoDeProductosModule } from './modules/catalogo-de-productos.module';
import { ProductoModule } from './modules/producto.module';
import { ServicioAlClienteModule } from './modules/servicio-al-cliente.module';
import { CarritoDeComprasModule } from './modules/carrito-de-compras.module';
import { PerfilDeUsuarioModule } from './modules/perfil-de-usuario.module';
import { BlogYNoticiasModule } from './modules/blog-y-noticias.module';
import { ReservasDeCitaModule } from './modules/reservas-de-cita.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Categoria } from './entities/categoria.entity';
import { ImagenProducto } from './entities/imagen.entity';
import { Marca } from './entities/marca.entity';
import { Subcategoria } from './entities/subcategoria.entity';
import { CatalogoSubcategoriaModule } from './modules/catalogo-subcategoria.module';
import { Carrito } from './entities/carrito.entity';
import { ProductoCarrito } from './entities/producto-carrito.entity';
import { CarritoModule } from './modules/carrito.module';
import { ProductosDestacadosModule } from './modules/productos-destacados.module';
import { VentoNews } from './entities/vento-news.entity';
import { VentoNewsModule } from './modules/vento-news.module';
import { ProductosRelacionadosModule } from './modules/productos-relacionados.module';
import { SubcategoriaModule } from './modules/subcategoria.module';
import { ProductosSimilaresModule } from './modules/productos-similares.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Fechita1',
    database: 'ventoverso',
    entities: [Categoria, Producto, ImagenProducto, Marca, Subcategoria, Carrito, ProductoCarrito, VentoNews]
  }), CatalogoDeProductosModule, CatalogoSubcategoriaModule, SubcategoriaModule, ProductoModule, ProductosDestacadosModule, ProductosRelacionadosModule, ProductosSimilaresModule, VentoNewsModule, ServicioAlClienteModule, CarritoDeComprasModule, CarritoModule, PerfilDeUsuarioModule, BlogYNoticiasModule, ReservasDeCitaModule],
  controllers: [AppController],
  providers: [],

})


export class AppModule { };

