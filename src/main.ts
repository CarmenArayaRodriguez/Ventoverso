import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { BlogYNoticiasModule } from './modules/blog-y-noticias.module';
import { ProductoModule } from './modules/producto.module';
import { PerfilDeUsuarioModule } from './modules/perfil-de-usuario.module';
import { Logger, ValidationPipe } from '@nestjs/common';
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
import { ImagenesModule } from './modules/imagenes.module';
import { AutenticacionModule } from './modules/autenticacion.module';
import { CategoriaModule } from './modules/categoria.module';
import { MarcaModule } from './modules/marca.module';
import { RegionesModule } from './modules/region.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { CiudadModule } from './modules/ciudad.module';
import { ComunaModule } from './modules/comuna.module';
import { CitaModule } from './modules/cita.module';

require('dotenv').config();


async function bootstrap() {
  const logger = new Logger('Bootstrap');

  logger.log('Iniciando la aplicación...');
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          level: 'debug',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.colorize(),
            winston.format.simple()
          ),
        }),
      ]
    })
  });

  // app.useLogger(new Logger());
  app.use(express.json({ limit: '50mb' })); // Aumentar límite para JSON
  app.use(express.urlencoded({ limit: '50mb', extended: true })); // Aumentar límite para datos de formulario
  app.use('/imagenes-producto', express.static('/Users/carmen/Desktop/front-ventoverso/public/imagenes-producto')); //Configuración para servir archivos estáticos

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

  //CONFIGURACION SWAGGER Carrito 
  const carritoOptions = new DocumentBuilder()
    .setTitle('Ventoverso Carrito API')
    .setDescription('API para el Carrito')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'autenticacionJWT')
    .build();
  const carritoDocument = SwaggerModule.createDocument(app, carritoOptions, {
    include: [CarritoModule],
  });
  SwaggerModule.setup('docs/carrito', app, carritoDocument);


  //CONFIGURACION SWAGGER Producto
  const productoSwaggerConfig = new DocumentBuilder()
    .setTitle('API de Producto')
    .setDescription('API para la gestión de producto en Ventoverso')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'autenticacionJWT')
    .build();
  const productoDocument = SwaggerModule.createDocument(app, productoSwaggerConfig, {
    include: [ProductoModule],
  });
  SwaggerModule.setup('docs/producto', app, productoDocument);

  //CONFIGURACION SWAGGER Imágenes
  const imagenesSwaggerConfig = new DocumentBuilder()
    .setTitle('API de Imágenes')
    .setDescription('API para la gestión de imágenes en Ventoverso')
    .setVersion('1.0')
    .build();
  const imagenesDocument = SwaggerModule.createDocument(app, imagenesSwaggerConfig, {
    include: [ImagenesModule],
  });
  SwaggerModule.setup('docs/imagenes', app, imagenesDocument);

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
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'autenticacionJWT')
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

  //CONFIGURACION SWAGGER login
  const loginOptions = new DocumentBuilder()
    .setTitle('Ventoverso Login API')
    .setDescription('API para el login')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'autenticacionJWT',
    )
    .build();
  const loginDocument = SwaggerModule.createDocument(app, loginOptions, {
    include: [AutenticacionModule],
  });
  SwaggerModule.setup('docs/login', app, loginDocument);

  //CONFIGURACION SWAGGER lista de categorias y subcategorias
  const categoriaOptions = new DocumentBuilder()
    .setTitle('Ventoverso Lista de categorías API')
    .setDescription('API para lista de categorias y subcategorias')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'autenticacionJWT')
    .build();
  const categoriaDocument = SwaggerModule.createDocument(app, categoriaOptions, {
    include: [CategoriaModule],
  });
  SwaggerModule.setup('docs/categoria', app, categoriaDocument);


  //CONFIGURACION SWAGGER lista de marcas
  const marcaOptions = new DocumentBuilder()
    .setTitle('Ventoverso Marca API')
    .setDescription('API para lista de marcas')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'autenticacionJWT')
    .build();
  const marcaDocument = SwaggerModule.createDocument(app, marcaOptions, {
    include: [MarcaModule],
  });
  SwaggerModule.setup('docs/marca', app, marcaDocument);


  //CONFIGURACION SWAGGER regiones
  const regionOptions = new DocumentBuilder()
    .setTitle('Ventoverso Regiones API')
    .setDescription('API para regiones')
    .setVersion('1.0')
    .build();
  const regionDocument = SwaggerModule.createDocument(app, regionOptions, {
    include: [RegionesModule],
  });
  SwaggerModule.setup('docs/regiones', app, regionDocument);

  //CONFIGURACION SWAGGER ciudades
  const ciudadOptions = new DocumentBuilder()
    .setTitle('Ventoverso Ciudades API')
    .setDescription('API para ciudades')
    .setVersion('1.0')
    .build();
  const ciudadDocument = SwaggerModule.createDocument(app, ciudadOptions, {
    include: [CiudadModule],
  });
  SwaggerModule.setup('docs/ciudades', app, ciudadDocument);

  //CONFIGURACION SWAGGER comunas
  const comunaOptions = new DocumentBuilder()
    .setTitle('Ventoverso Comunas API')
    .setDescription('API para comunas')
    .setVersion('1.0')
    .build();
  const comunaDocument = SwaggerModule.createDocument(app, comunaOptions, {
    include: [ComunaModule],
  });
  SwaggerModule.setup('docs/comunas', app, comunaDocument);

  //CONFIGURACION SWAGGER agenda
  const agendaOptions = new DocumentBuilder()
    .setTitle('Ventoverso Agenda API')
    .setDescription('API para agenda')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'autenticacionJWT')
    .build();
  const agendaDocument = SwaggerModule.createDocument(app, agendaOptions, {
    include: [CitaModule],
  });
  SwaggerModule.setup('docs/agenda', app, agendaDocument);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3000);
  logger.log('Aplicación iniciada');
}
bootstrap();

