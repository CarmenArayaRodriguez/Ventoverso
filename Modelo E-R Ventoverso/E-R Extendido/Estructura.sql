CREATE TABLE `cliente` (
  `rut_cliente` varchar(10) PRIMARY KEY,
  `dv_cliente` char,
  `nombre` varchar(20),
  `apellido` varchar(30),
  `email` varchar(30),
  `direccion` varchar(50),
  `ciudad` varchar(50),
  `comuna` varchar(50),
  `region` varchar(50),
  `password` varchar(20),
  `telefono` varchar(20)
);

CREATE TABLE `pedido` (
  `id` integer PRIMARY KEY,
  `rut_cliente` varchar(10),
  `id_producto` integer,
  `estado` varchar(10),
  `sub_total` integer,
  `total` integer,
  `direccionEnvio` varchar(50),
  `cantidad` integer,
  `fecha` datetime
);

CREATE TABLE `producto` (
  `id` integer PRIMARY KEY,
  `id_categoria` integer,
  `id_subcategoria` integer,
  `nombre` varchar(100),
  `descripcion` varchar(250),
  `precio` integer,
  `stock` integer,
  `imagen` blob,
  `url_producto` varchar(250)
);

CREATE TABLE `detalle_pedido` (
  `id_producto` integer,
  `id_pedido` integer
);

CREATE TABLE `categoria` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(10),
  `descripcion` varchar(250)
);

CREATE TABLE `subcategoria` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(250),
  `descripcion` varchar(250),
  `id_categoria` integer
);

CREATE TABLE `marcas` (
  `id` integer PRIMARY KEY,
  `marca` varchar(20),
  `detalle` varchar(250)
);

CREATE TABLE `categoria_marcas` (
  `id_categoria` integer,
  `id_marcas` integer
);

CREATE TABLE `carrito` (
  `id` integer PRIMARY KEY,
  `rut_cliente` varchar(10),
  `status_carrito` varchar(50),
  `creacion_date` datetime
);

CREATE TABLE `coment_byn` (
  `id` integer PRIMARY KEY,
  `rut_cliente` varchar(10),
  `id_articulo` integer,
  `publicacion_date` datetime,
  `contenido` varchar(250)
);

CREATE TABLE `articulobyn` (
  `id` integer PRIMARY KEY,
  `rut_cliente` varchar(10),
  `titulo` varchar(50),
  `contenido` varchar(250),
  `publicacion_date` datetime,
  `autor` varchar(50)
);

CREATE TABLE `carrusel` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(50),
  `descripcion` varchar(250),
  `fechainicio` datetime,
  `fechafin` datetime
);

CREATE TABLE `carrusel_producto` (
  `id_producto` integer,
  `id_carrusel` integer
);

CREATE TABLE `destacado` (
  `id` integer PRIMARY KEY,
  `FechaInicio` datetime,
  `FechaFin` datetime,
  `estrellas` integer,
  `descuento` integer
);

CREATE TABLE `producto_destacado` (
  `id_destacado` integer,
  `id_producto` integer,
  `FechaInicio` datetime,
  `FechaFin` datetime
);

CREATE TABLE `metodoEnvio` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(20),
  `descripcion` varchar(50),
  `costo_envio` integer
);

CREATE TABLE `regionEnvio` (
  `id` integer PRIMARY KEY,
  `nombre` varchar(20),
  `codigo_postal` integer
);

CREATE TABLE `envio` (
  `id` integer PRIMARY KEY,
  `id_pedido` integer,
  `id_metodoEnvio` integer,
  `id_regionEnvio` integer,
  `fc_envio` date
);

CREATE TABLE `metodoPago` (
  `id` integer PRIMARY KEY,
  `nombre_metodo_pago` varchar(50),
  `detalle_metodo_pago` varchar(50)
);

CREATE TABLE `pago` (
  `id` integer PRIMARY KEY,
  `id_pedido` integer,
  `id_metodoPago` integer,
  `fcPago` date,
  `estado` varchar(20),
  `monto` integer
);

ALTER TABLE `pedido` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `pedido` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `producto` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

ALTER TABLE `producto` ADD FOREIGN KEY (`id_subcategoria`) REFERENCES `subcategoria` (`id`);

ALTER TABLE `detalle_pedido` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `detalle_pedido` ADD FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`);

ALTER TABLE `subcategoria` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

ALTER TABLE `categoria_marcas` ADD FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);

ALTER TABLE `categoria_marcas` ADD FOREIGN KEY (`id_marcas`) REFERENCES `marcas` (`id`);

ALTER TABLE `carrito` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `coment_byn` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `coment_byn` ADD FOREIGN KEY (`id_articulo`) REFERENCES `articulobyn` (`id`);

ALTER TABLE `articulobyn` ADD FOREIGN KEY (`rut_cliente`) REFERENCES `cliente` (`rut_cliente`);

ALTER TABLE `carrusel_producto` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `carrusel_producto` ADD FOREIGN KEY (`id_carrusel`) REFERENCES `carrusel` (`id`);

ALTER TABLE `producto_destacado` ADD FOREIGN KEY (`id_destacado`) REFERENCES `destacado` (`id`);

ALTER TABLE `producto_destacado` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

ALTER TABLE `envio` ADD FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`);

ALTER TABLE `envio` ADD FOREIGN KEY (`id_metodoEnvio`) REFERENCES `metodoEnvio` (`id`);

ALTER TABLE `envio` ADD FOREIGN KEY (`id_regionEnvio`) REFERENCES `regionEnvio` (`id`);

ALTER TABLE `pago` ADD FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id`);

ALTER TABLE `pago` ADD FOREIGN KEY (`id_metodoPago`) REFERENCES `metodoPago` (`id`);