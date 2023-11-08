import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { BlogYNoticiasModule } from './modules/blog-y-noticias.module';
import { CarritoDeComprasModule } from './modules/carrito-de-compras.module';
import { ProductoModule } from './modules/producto.module';
import { PerfilDeUsuarioModule } from './modules/perfil-de-usuario.module';
import { ReservasDeCitaModule } from './modules/reservas-de-cita.module';
import { ServicioAlClienteModule } from './modules/servicio-al-cliente.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
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

  //CONFIGURACION SWAGGER Carrito de Compras 
  const carritoDeComprasOptions = new DocumentBuilder()
    .setTitle('Ventoverso Carrito de compras API')
    .setDescription('API para el módulo de Carrito de compras')
    .setVersion('1.0')
    .build();
  const carritoDeComprasDocument = SwaggerModule.createDocument(app, carritoDeComprasOptions, {
    include: [CarritoDeComprasModule],
  });
  SwaggerModule.setup('docs/carrito-de-compras', app, carritoDeComprasDocument);

  //CONFIGURACION SWAGGER Catalogo de Productos
  const catalogoDeProductosOptions = new DocumentBuilder()
    .setTitle('Ventoverso Catálogo de productos API')
    .setDescription('API para el módulo de Catálogo de productos')
    .setVersion('1.0')
    .build();
  const catalogoDeProductosDocument = SwaggerModule.createDocument(app, catalogoDeProductosOptions, {
    include: [ProductoModule],
  });
  SwaggerModule.setup('docs/catalogo-de-productos', app, catalogoDeProductosDocument);

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
  await app.listen(3000);
}
bootstrap();

