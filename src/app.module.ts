import { Module } from '@nestjs/common';
import { CatalogoDeProductosModule } from './modules/catalogo-de-productos.module';
import { ProductoModule } from './modules/producto.module';
import { ServicioAlClienteModule } from './modules/servicio-al-cliente.module';
// import { CarritoDeComprasModule } from './modules/carrito-de-compras.module';
import { PerfilDeUsuarioModule } from './modules/perfil-de-usuario.module';
import { BlogYNoticiasModule } from './modules/blog-y-noticias.module';
import { ReservasDeCitaModule } from './modules/reservas-de-cita.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Categoria } from './entities/categoria.entity';
import { ImagenProducto } from './entities/imagen-producto.entity';
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
import { Comentario } from './entities/comentario.entity';
import { ComentariosModule } from './modules/comentarios.module';
import { Calificacion } from './entities/calificacion.entity';
import { CalificacionesModule } from './modules/calificaciones.module';
import { Cliente } from './entities/cliente.entity';
import { Carrusel } from './entities/carrusel.entity';
import { CarruselModule } from './modules/carrusel.module';
import { Compra } from './entities/compra.entity';
import { ComprasModule } from './modules/compras.module';
import { ImagenesModule } from './modules/imagenes.module';
import { AutenticacionModule } from './modules/autenticacion.module';
import { MetodoPago } from './entities/metodo-de-pago.entity';
import { MetodoEnvio } from './entities/metodo-de-envio.entity';
import { DetalleCompra } from './entities/detalle-compra.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Fechita1',
    database: 'ventoverso',
    entities: [Categoria, Producto, ImagenProducto, Marca, Subcategoria, Carrito, ProductoCarrito, VentoNews, Comentario, Calificacion, Cliente, Carrusel, Compra, MetodoPago, MetodoEnvio, DetalleCompra],


    //NO BORRAR ESTA LÍNEA (Sirve para imprimir las consultas)
    // logging: true

  }), CatalogoDeProductosModule, CatalogoSubcategoriaModule, SubcategoriaModule, ProductoModule, ProductosDestacadosModule, ProductosRelacionadosModule, ProductosSimilaresModule, VentoNewsModule, ComentariosModule, CalificacionesModule, CarruselModule, CarritoModule, ComprasModule, PerfilDeUsuarioModule, BlogYNoticiasModule, ReservasDeCitaModule, ImagenesModule, AutenticacionModule],
  controllers: [AppController],
  providers: [],

})


export class AppModule { };

