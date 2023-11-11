create database ventoverso;

use ventoverso;


CREATE TABLE `cliente` (
  `rut_cliente` varchar(10) PRIMARY KEY,
  `dv_cliente` char,
  `nombre` varchar(50),
  `apellido` varchar(50),
  `email` varchar(50),
  `direccion` varchar(50),
  `ciudad` varchar(50),
  `comuna` varchar(50),
  `region` varchar(50),
  `password` varchar(20),
  `telefono` varchar(20)
);

CREATE TABLE `pedido` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `rut_cliente` varchar(10),
  `id_producto` integer,
  `estado` varchar(10),
  `sub_total` integer,
  `total` integer,
  `direccionEnvio` varchar(50),
  `cantidad` integer,
  `fecha` date
);

CREATE TABLE `producto` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_categoria` integer,
  `id_subcategoria` integer,
  `id_marcas` integer,
  `nombre` varchar(100),
  `descripcion` varchar(300),
  `precio` integer,
  `stock` integer,
  `estrellas` integer,
  `caracteristicasPrincipales` varchar(255),
  `url_producto` varchar(250)
  `estrellas` integer
);

CREATE TABLE `detallePedido` (
  `id_producto` integer,
  `id_pedido` integer
);

CREATE TABLE `categoria` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100),
  `descripcion` varchar(250)
);

CREATE TABLE `subcategoria` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(250),
  `descripcion` varchar(250),
  `id_categoria` integer
);

CREATE TABLE `marcas` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `marca` varchar(100),
  `detalle` varchar(300)
);

CREATE TABLE `categoriaMarcas` (
  `id_categoria` integer,
  `id_marcas` integer
);

CREATE TABLE `carrito` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `rut_cliente` varchar(10),
  `status_carrito` varchar(50),
  `creacion_date` date
);

CREATE TABLE `comentByn` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `rut_cliente` varchar(10),
  `id_articulo` integer,
  `publicacion_date` date,
  `contenido` varchar(250)
);

CREATE TABLE `articuloByn` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `rut_cliente` varchar(10),
  `titulo` varchar(50),
  `contenido` varchar(300),
  `publicacion_date` date,
  `autor` varchar(100)
);

CREATE TABLE `carrusel` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(50),
  `descripcion` varchar(250),
  `fechainicio` date,
  `fechafin` date
);

CREATE TABLE `carruselProducto` (
  `id_producto` integer,
  `id_carrusel` integer
);

CREATE TABLE `producto_destacado` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_producto` integer,
  `valoracion` varchar(50),
  `descuento` integer,
  `FechaInicio` date,
  `FechaFin` date
);

CREATE TABLE `metodoEnvio` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(20),
  `descripcion` varchar(50),
  `costo_envio` integer
);

CREATE TABLE `regionEnvio` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100),
  `codigo_postal` integer
);

CREATE TABLE `envio` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_pedido` integer,
  `id_metodoEnvio` integer,
  `id_regionEnvio` integer,
  `fc_envio` date
);

CREATE TABLE `metodoPago` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre_metodo_pago` varchar(50),
  `detalle_metodo_pago` varchar(50)
);

CREATE TABLE `pago` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_pedido` integer,
  `id_metodoPago` integer,
  `fcPago` date,
  `estado` varchar(20),
  `monto` integer
);

CREATE TABLE `imagenProducto` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_producto` integer,
  `nombre` varchar(100),
  `descripcion` varchar(100),
  `imagen` varchar(250)
);

ALTER TABLE `pedido` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `pedido` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `producto` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

ALTER TABLE `producto` ADD FOREIGN KEY (`id_subcategoria`) REFERENCES `subcategoria` (`id`);

ALTER TABLE `producto` ADD FOREIGN KEY (`id_marcas`) REFERENCES `marcas` (`id`);

ALTER TABLE `detallePedido` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `detallePedido` ADD FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`);

ALTER TABLE `subcategoria` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

ALTER TABLE `categoriaMarcas` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

ALTER TABLE `categoriaMarcas` ADD FOREIGN KEY (`id_marcas`) REFERENCES `marcas` (`id`);

ALTER TABLE `carrito` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `comentByn` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `comentByn` ADD FOREIGN KEY (`id_articulo`) REFERENCES `articuloByn` (`id`);

ALTER TABLE `articuloByn` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `carruselProducto` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `carruselProducto` ADD FOREIGN KEY (`id_carrusel`) REFERENCES `carrusel` (`id`);

ALTER TABLE `producto_destacado` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `envio` ADD FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`);

ALTER TABLE `envio` ADD FOREIGN KEY (`id_metodoEnvio`) REFERENCES `metodoEnvio` (`id`);

ALTER TABLE `envio` ADD FOREIGN KEY (`id_regionEnvio`) REFERENCES `regionEnvio` (`id`);

ALTER TABLE `pago` ADD FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`);

ALTER TABLE `pago` ADD FOREIGN KEY (`id_metodoPago`) REFERENCES `metodoPago` (`id`);

ALTER TABLE `imagenProducto` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);
