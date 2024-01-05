create database ventoverso;

use ventoverso;

CREATE TABLE `cliente` (
  `rut_cliente` varchar(10) PRIMARY KEY,
  `nombre` varchar(255),
  `apellido` varchar(255),
  `email` varchar(255),
  `direccion` varchar(255),
  `ciudad` varchar(255),
  `comuna` varchar(255),
  `region` varchar(255),
  `password` varchar(255),
  `telefono` varchar(255),
  `roles` varchar(255)
);

CREATE TABLE `compra` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `rut_cliente` varchar(10),
  `id_producto` integer,
  `id_direccionEnvio` integer,
  `total` int NOT NULL,
  `fecha` timestamp DEFAULT (current_timestamp()),
  `estado` varchar(255),
  `cuponUsado` boolean
);

CREATE TABLE `detalleCompra` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_producto` integer,
  `id_compra` integer,
  `cantidad` int NOT NULL,
  `precio` int NOT NULL
);

CREATE TABLE `direccionEnvio` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `rut_cliente` varchar(10),
  `direccion` varchar(255),
  `id_ciudad` integer,
  `id_comuna` integer,
  `id_regionEnvio` integer
);

CREATE TABLE `regionEnvio` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(100),
  `codigo_postal` bigint
);

CREATE TABLE `ciudad` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_regionEnvio` integer,
  `nombre` varchar(255)
);

CREATE TABLE `comuna` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_ciudad` integer,
  `nombre` varchar(255)
);

CREATE TABLE `producto` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_categoria` integer,
  `id_subcategoria` integer,
  `id_marcas` integer,
  `nombre` varchar(100),
  `modelo` varchar(255),
  `descripcion` varchar(300),
  `caracteristicasPrincipales` varchar(255),
  `precio` integer,
  `stock` integer,
  `estrellas` integer
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
  `id_categoria` integer,
  `imagen` varchar(250)
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
  `creacion_date` date,
  `subtotal` integer,
  `cupon` varchar(255)
);

CREATE TABLE `productoCarrito` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_carrito` integer,
  `id_producto` integer,
  `cantidad` integer
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
  `autor` varchar(100),
  `imagen` varchar(250)
);

CREATE TABLE `carrusel` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(50),
  `descripcion` varchar(250),
  `fechainicio` date,
  `fechafin` date,
  `imagenUrl` varchar(250)
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

CREATE TABLE `envio` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_compra` integer,
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
  `id_compra` integer,
  `id_metodoPago` integer,
  `fcPago` date,
  `estado` varchar(20),
  `monto` integer
);

CREATE TABLE `imagenProducto` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_producto` integer,
  `imagen` varchar(250),
  `nombre_imagen` varchar(250)
);

CREATE TABLE `calificacion` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_producto` integer,
  `nombreCliente` varchar(250),
  `caracteristicas` integer(200),
  `sonido` integer(200),
  `fabricacion` integer(200),
  `id_comentario` integer
);

CREATE TABLE `comentario` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_producto` integer,
  `nombreCliente` varchar(250),
  `titulo` varchar(255),
  `comentario` text,
  `estrellas` integer(255),
  `fecha` date,
  `megusta` int DEFAULT 0,
  `nomegusta` int DEFAULT 0,
  `denuncias` int DEFAULT 0,
  `id_calificacion` integer
);

CREATE TABLE `detalle_producto` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `id_producto` integer,
  `clave` varchar(255),
  `sistema` varchar(255),
  `cantLlaves` varchar(255),
  `materialLlave` varchar(255),
  `materialCuerpo` varchar(255),
  `incluyeBoquilla` boolean,
  `cantBarriles` varchar(255),
  `largoBarril` varchar(255),
  `reposaPulgar` varchar(255),
  `cantAnillos` varchar(255),
  `incluyeCanas` boolean,
  `incluyeMaleta` boolean,
  `origen` varchar(255)
);

ALTER TABLE `compra` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `compra` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `compra` ADD FOREIGN KEY (`id_direccionEnvio`) REFERENCES `direccionEnvio` (`id`);

ALTER TABLE `detalleCompra` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `detalleCompra` ADD FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id`);

ALTER TABLE `direccionEnvio` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `direccionEnvio` ADD FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad` (`id`);

ALTER TABLE `direccionEnvio` ADD FOREIGN KEY (`id_comuna`) REFERENCES `comuna` (`id`);

ALTER TABLE `direccionEnvio` ADD FOREIGN KEY (`id_regionEnvio`) REFERENCES `regionEnvio` (`id`);

ALTER TABLE `ciudad` ADD FOREIGN KEY (`id_regionEnvio`) REFERENCES `regionEnvio` (`id`);

ALTER TABLE `comuna` ADD FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad` (`id`);

ALTER TABLE `producto` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

ALTER TABLE `producto` ADD FOREIGN KEY (`id_subcategoria`) REFERENCES `subcategoria` (`id`);

ALTER TABLE `producto` ADD FOREIGN KEY (`id_marcas`) REFERENCES `marcas` (`id`);

ALTER TABLE `subcategoria` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

ALTER TABLE `categoriaMarcas` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

ALTER TABLE `categoriaMarcas` ADD FOREIGN KEY (`id_marcas`) REFERENCES `marcas` (`id`);

ALTER TABLE `carrito` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `productoCarrito` ADD FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`id`);

ALTER TABLE `productoCarrito` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `comentByn` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `comentByn` ADD FOREIGN KEY (`id_articulo`) REFERENCES `articuloByn` (`id`);

ALTER TABLE `articuloByn` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `carruselProducto` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `carruselProducto` ADD FOREIGN KEY (`id_carrusel`) REFERENCES `carrusel` (`id`);

ALTER TABLE `producto_destacado` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `envio` ADD FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id`);

ALTER TABLE `envio` ADD FOREIGN KEY (`id_metodoEnvio`) REFERENCES `metodoEnvio` (`id`);

ALTER TABLE `envio` ADD FOREIGN KEY (`id_regionEnvio`) REFERENCES `regionEnvio` (`id`);

ALTER TABLE `pago` ADD FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id`);

ALTER TABLE `pago` ADD FOREIGN KEY (`id_metodoPago`) REFERENCES `metodoPago` (`id`);

ALTER TABLE `imagenProducto` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `calificacion` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `comentario` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `comentario` ADD FOREIGN KEY (`id_calificacion`) REFERENCES `calificacion` (`id`);

ALTER TABLE `detalle_producto` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);
