import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { BlogYNoticiasModule } from './modules/blog-y-noticias.module';
// import { CarritoDeComprasModule } from './modules/carrito-de-compras.module';
import { ProductoModule } from './modules/producto.module';
import { PerfilDeUsuarioModule } from './modules/perfil-de-usuario.module';
import { ReservasDeCitaModule } from './modules/reservas-de-cita.module';
import { ServicioAlClienteModule } from './modules/servicio-al-cliente.module';
import { ValidationPipe } from '@nestjs/common';
import { CatalogoDeProductosModule } from './modules/catalogo-de-productos.module';
import { CatalogoSubcategoriaModule } from './modules/catalogo-subcategoria.module';
import { CarritoModule } from './modules/carrito.module';
import { ProductosDestacadosModule } from './modules/productos-destacados.module';
import { VentoNewsModule } from './modules/vento-news.module';
import { ProductosRelacionadosModule } from './modules/productos-relacionados.module';
import { SubcategoriaModule } from './modules/subcategoria.module';
import { ProductosSimilaresModule } from './modules/productos-similares.module';
import { ComentariosModule } from './modules/comentarios.module';
import { CalificacionesModule } from './modules/calificaciones.module';
import { CarruselModule } from './modules/carrusel.module';
import { ComprasModule } from './modules/compras.module';

async function bootstrap() {
  console.log('Iniciando la aplicación...');
  const app = await NestFactory.create(AppModule);

  //CONFIGURACION SWAGGER Blog y Noticias
  const blogYNoticiasOptions = new DocumentBuilder()
    .setTitle('Ventoverso Blog y noticias API')
    .setDescription('API para el módulo de Blog y noticias')
    .setVersion('1.0')
    .build();
  const blogYNoticiasDocument = SwaggerModule.createDocument(app, blogYNoticiasOptions, {
    include: [BlogYNoticiasModule],
  });
  SwaggerModule.setup('docs/blog-y-noticias', app, blogYNoticiasDocument);

  //CONFIGURACION SWAGGER Vento News
  const VentoNewsOptions = new DocumentBuilder()
    .setTitle('Ventoverso Vento News API')
    .setDescription('API para Vento News')
    .setVersion('1.0')
    .build();
  const VentoNewsDocument = SwaggerModule.createDocument(app, VentoNewsOptions, {
    include: [VentoNewsModule],
  });
  SwaggerModule.setup('docs/vento-news', app, VentoNewsDocument);

  //CONFIGURACION SWAGGER Carrito de Compras 
  // const carritoDeComprasOptions = new DocumentBuilder()
  //   .setTitle('Ventoverso Carrito de compras API')
  //   .setDescription('API para el módulo de Carrito de compras')
  //   .setVersion('1.0')
  //   .build();
  // const carritoDeComprasDocument = SwaggerModule.createDocument(app, carritoDeComprasOptions, {
  //   include: [CarritoDeComprasModule],
  // });
  // SwaggerModule.setup('docs/carrito-de-compras', app, carritoDeComprasDocument);

  //CONFIGURACION SWAGGER Carrito 
  const carritoOptions = new DocumentBuilder()
    .setTitle('Ventoverso Carrito API')
    .setDescription('API para el Carrito')
    .setVersion('1.0')
    .build();
  const carritoDocument = SwaggerModule.createDocument(app, carritoOptions, {
    include: [CarritoModule],
  });
  SwaggerModule.setup('docs/carrito', app, carritoDocument);


  //CONFIGURACION SWAGGER Catalogo de Productos
  const catalogoDeProductosOptions = new DocumentBuilder()
    .setTitle('Ventoverso Catálogo de productos API')
    .setDescription('API para el módulo de Catálogo de productos')
    .setVersion('1.0')
    .build();
  const catalogoDeProductosDocument = SwaggerModule.createDocument(app, catalogoDeProductosOptions, {
    include: [CatalogoDeProductosModule],
  });
  SwaggerModule.setup('docs/catalogo-de-productos', app, catalogoDeProductosDocument);

  //CONFIGURACION SWAGGER Producto
  const productoSwaggerConfig = new DocumentBuilder()
    .setTitle('API de Producto')
    .setDescription('API para la gestión de producto en Ventoverso')
    .setVersion('1.0')
    .build();
  const productoDocument = SwaggerModule.createDocument(app, productoSwaggerConfig, {
    include: [ProductoModule],
  });
  SwaggerModule.setup('docs/producto', app, productoDocument);

  //CONFIGURACION SWAGGER Productos destacados
  const productosDestacadosSwaggerConfig = new DocumentBuilder()
    .setTitle('API de Productos Destacados')
    .setDescription('API para productos destacados')
    .setVersion('1.0')
    .build();
  const productosDestacadosDocument = SwaggerModule.createDocument(app, productosDestacadosSwaggerConfig, {
    include: [ProductosDestacadosModule],
  });
  SwaggerModule.setup('docs/productos-destacados', app, productosDestacadosDocument);

  //CONFIGURACION SWAGGER Productos relacionados
  const productosRelacionadosSwaggerConfig = new DocumentBuilder()
    .setTitle('API de Productos Relacionados')
    .setDescription('API para productos relacionados')
    .setVersion('1.0')
    .build();
  const productosRelacionadosDocument = SwaggerModule.createDocument(app, productosRelacionadosSwaggerConfig, {
    include: [ProductosRelacionadosModule],
  });
  SwaggerModule.setup('docs/productos-relacionados', app, productosRelacionadosDocument);


  //CONFIGURACION SWAGGER Productos similares
  const productosSimilaresSwaggerConfig = new DocumentBuilder()
    .setTitle('API de Productos Similares')
    .setDescription('API para productos similares')
    .setVersion('1.0')
    .build();
  const productosSimilaresDocument = SwaggerModule.createDocument(app, productosSimilaresSwaggerConfig, {
    include: [ProductosSimilaresModule],
  });
  SwaggerModule.setup('docs/productos-similares', app, productosSimilaresDocument);


  //CONFIGURACION SWAGGER Subcategoría
  const SubcategoriaOptions = new DocumentBuilder()
    .setTitle('Ventoverso Subcategorías de Productos API')
    .setDescription('API para subcategorías')
    .setVersion('1.0')
    .build();
  const SubcategoriaDocument = SwaggerModule.createDocument(app, SubcategoriaOptions, {
    include: [SubcategoriaModule],
  });
  SwaggerModule.setup('docs/subcategoria', app, SubcategoriaDocument);

  //CONFIGURACION SWAGGER Catalogo de Subcategoría
  const catalogoSubcategoriaOptions = new DocumentBuilder()
    .setTitle('Ventoverso Catálogo Subcategoría de Productos API')
    .setDescription('API para los productos por subcategoría')
    .setVersion('1.0')
    .build();
  const catalogoSubcategoriaDocument = SwaggerModule.createDocument(app, catalogoSubcategoriaOptions, {
    include: [CatalogoSubcategoriaModule],
  });
  SwaggerModule.setup('docs/catalogo-subcategoria', app, catalogoSubcategoriaDocument);

  //CONFIGURACION SWAGGER Comentarios 
  const comentariosOptions = new DocumentBuilder()
    .setTitle('Ventoverso Comentarios API')
    .setDescription('API para los comentarios')
    .setVersion('1.0')
    .build();
  const comentariosDocument = SwaggerModule.createDocument(app, comentariosOptions, {
    include: [ComentariosModule],
  });
  SwaggerModule.setup('docs/comentarios', app, comentariosDocument);

  //CONFIGURACION SWAGGER Calificaciones 
  const calificacionesOptions = new DocumentBuilder()
    .setTitle('Ventoverso Calificaciones API')
    .setDescription('API para las calificaciones')
    .setVersion('1.0')
    .build();
  const calificacionesDocument = SwaggerModule.createDocument(app, calificacionesOptions, {
    include: [CalificacionesModule],
  });
  SwaggerModule.setup('docs/calificaciones', app, calificacionesDocument);

  //CONFIGURACION SWAGGER Carrusel 
  const carruselOptions = new DocumentBuilder()
    .setTitle('Ventoverso Carrusel API')
    .setDescription('API para carrusel')
    .setVersion('1.0')
    .build();
  const carruselDocument = SwaggerModule.createDocument(app, carruselOptions, {
    include: [CarruselModule],
  });
  SwaggerModule.setup('docs/carrusel', app, carruselDocument);

  //CONFIGURACION SWAGGER Compras 
  const comprasOptions = new DocumentBuilder()
    .setTitle('Ventoverso Compras API')
    .setDescription('API para compras')
    .setVersion('1.0')
    .build();
  const comprasDocument = SwaggerModule.createDocument(app, comprasOptions, {
    include: [ComprasModule],
  });
  SwaggerModule.setup('docs/compras', app, comprasDocument);

  //CONFIGURACION SWAGGER Perfil de usuario
  const perfilDeUsuarioOptions = new DocumentBuilder()
    .setTitle('Ventoverso Perfil de usuario API')
    .setDescription('API para el módulo de Perfil de usuario')
    .setVersion('1.0')
    .build();
  const perfilDeUsuarioDocument = SwaggerModule.createDocument(app, perfilDeUsuarioOptions, {
    include: [PerfilDeUsuarioModule],
  });
  SwaggerModule.setup('docs/perfil-de-usuario', app, perfilDeUsuarioDocument);

  //CONFIGURACION SWAGGER Reserva de Citas
  const reservasDeCitaOptions = new DocumentBuilder()
    .setTitle('Ventoverso Reservas de cita API')
    .setDescription('API para el módulo de Reservas de cita')
    .setVersion('1.0')
    .build();
  const reservasDeCitaDocument = SwaggerModule.createDocument(app, reservasDeCitaOptions, {
    include: [ReservasDeCitaModule],
  });
  SwaggerModule.setup('docs/reservas-de-cita', app, reservasDeCitaDocument);

  //CONFIGURACION SWAGGER Servicio al Cliente
  const servicioAlClienteOptions = new DocumentBuilder()
    .setTitle('Ventoverso Servicio al cliente API')
    .setDescription('API para el módulo de Servicio al cliente')
    .setVersion('1.0')
    .build();
  const servicioAlClienteDocument = SwaggerModule.createDocument(app, servicioAlClienteOptions, {
    include: [ServicioAlClienteModule],
  });
  SwaggerModule.setup('docs/servicio-al-cliente', app, servicioAlClienteDocument);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3000);
  console.log('Aplicación iniciada');
}
bootstrap();

