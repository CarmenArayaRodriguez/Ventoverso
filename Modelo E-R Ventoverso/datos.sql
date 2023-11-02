create database ventoverso;

use ventoverso;



/* INSERT TABLA CLIENTES */
INSERT INTO `cliente` (`rut_cliente`, `dv_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
VALUES ('12227463', '2', 'Juan', 'Pérez', 'claudio@example.com', 'Calle 123', 'VINA DEL MAR', 'VALPARAISO', 'Región V', 'contrasena123', '555-555-555');
INSERT INTO `cliente` (`rut_cliente`, `dv_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
VALUES ('11222356', '1', 'Felipe', 'Contreras', 'felipe@example.com', 'Calle 222', 'VINA DEL MAR', 'VALPARAISO', 'Región V', 'contrasena124', '555-444-555');
INSERT INTO `cliente` (`rut_cliente`, `dv_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
VALUES ('13554351', '5', 'Eduardo', 'Perez', 'eduardo@example.com', 'Calle Magnolias 254', 'VENTISCAS', 'TALCA', 'Región VII', 'contrasena125', '333-444-555');
INSERT INTO `cliente` (`rut_cliente`, `dv_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
VALUES ('14333565', '1', 'Antonio', 'Rojas', 'antonio@example.com', 'Calle Blanco Encalada 18000', 'SANTIAGO CENTRO', 'SANTIAGO', 'Región Metropolitana', 'contrasena121', '333-443-655');
INSERT INTO `cliente` (`rut_cliente`, `dv_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
VALUES ('19265589', '1', 'Antonia', 'Gonzalez', 'anto2@example.com', 'Calle Ls Rosas 254', 'QUILPUE', 'VALPARAISO', 'Región V', 'contrasena125', '333-444-555');

/* INSERT TABLA CATEGORIA */
INSERT INTO `categoria` (`nombre`, `descripcion`)
VALUES ('Viento', 'Instrumentos de viento.');
INSERT INTO `categoria` (`nombre`, `descripcion`)
VALUES ('Guitarras y Bajos', 'Instrumentos de cuerda.');
INSERT INTO `categoria` (`nombre`, `descripcion`)
VALUES ('Baterias y Percusion', 'Instrumentos de percusion.');
INSERT INTO `categoria` (`nombre`, `descripcion`)
VALUES ('Platillos', 'Instrumentos de percusion.');
INSERT INTO `categoria` (`nombre`, `descripcion`)
VALUES ('ACCESORIOS', 'Accesorios para instrumentos de viento.');

/* INSERT TABLA SUBCATEGORIA */

INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`)
VALUES ('Clarinete Sib', 'Sistema Aleman.', 1);
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`)
VALUES ('Clarinete Sib', 'Sistema Bhoem.', 1);
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`)
VALUES ('Clarinete Mib', 'Sistema Aleman.', 1);
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`)
VALUES ('Clarinete Mib', 'Sistema Bhoem.', 1);
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`)
VALUES ('Clarinete La', 'Sistema Aleman.', 1);
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`)
VALUES ('Clarinete La', 'Sistema Bhoem.', 1);
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`)
VALUES ('Otros Clarinetes', 'Sistema Aleman.', 1);
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`)
VALUES ('Otros Clarinetes', 'Sistema Bhoem.', 1);
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`)
VALUES ('Campanas y Barriletes', 'Campanas y barriletes.', 1);

/* SELECT * FROM `subcategoria` WHERE `id_categoria` = 1; Busuqeda de los campos de una subcategoria de una categoria determinada.*/



/* INSERT TABLA MARCAS */
INSERT INTO `marcas` (`marca`, `detalle`)
VALUES ('Hohner', 'Fabricante de instrumentos de viento Hohner.');
INSERT INTO `marcas` (`marca`, `detalle`)
VALUES ('Moeck', 'Fabricante de instrumentos de viento Moeck.');
INSERT INTO `marcas` (`marca`, `detalle`)
VALUES ('Yamaha', 'Fabricante de instrumentos de viento Yamaha.');
INSERT INTO `marcas` (`marca`, `detalle`)
VALUES ('Selmer', 'Fabricante de instrumentos de viento Selmer.');
INSERT INTO `marcas` (`marca`, `detalle`)
VALUES ('Legere', 'Fabricante de instrumentos de viento Legere.');
INSERT INTO `marcas` (`marca`, `detalle`)
VALUES ('Thomann', 'Fabricante de instrumentos de viento Thomann.');
INSERT INTO `marcas` (`marca`, `detalle`)
VALUES ('F.A. Uebel', 'Fabricante de instrumentos de viento Uebel.');
INSERT INTO `marcas` (`marca`, `detalle`)
VALUES ('Schreiber', 'Fabricante de instrumentos de viento Schreiber.');
INSERT INTO `marcas` (`marca`, `detalle`)
VALUES ('Oscar Adler y CO', 'Fabricante de instrumentos de viento Adler.');
INSERT INTO `marcas` (`marca`, `detalle`)
VALUES ('Schreiber', 'Fabricante de instrumentos de viento Schreiber.');



/* INSERT TABLA categoriaMarcas */

INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 1);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 2);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 3);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 4);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 5);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 6);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 7);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 8);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 9);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 10);




INSERT INTO imagenProducto (id_producto, nombre, descripcion, imagen)
VALUES (1, 'Clarinete SIB FAU_1', 'Modelo 621 high ', LOAD_FILE('/Users/claudioandressanmartinconcha/Desktop/fotosVentoverso/FA Uebel/Modelo 621/ClarineteSibFAU_1.jpg'));




/* INSERT TABLA Productos */
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, descripcion, precio, stock, url_producto)
VALUES (1, 2, 7, 'Clarinete SIB FAU_1', 'Modelo 621 hight', 950000, 05, 'https://ejemplo.com/imagen.jpg');
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, descripcion, precio, stock, url_producto)
VALUES (1, 2, 7, 'Clarinete SIB FAU Mini', 'Modelo 621 mini', 890000, 02, 'https://ejemplo.com/imagen.jpg');
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, descripcion, precio, stock, url_producto)
VALUES (1, 2, 9, 'Clarinete SIB OA ', 'Modelo 320 High', 1390000, 04, 'https://ejemplo.com/imagen.jpg');
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, descripcion, precio, stock, url_producto)
VALUES (1, 2, 9, 'Clarinete SIB OA ', 'Modelo 320 Mini', 1390000, 05, 'https://ejemplo.com/imagen.jpg');
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, descripcion, precio, stock, url_producto)
VALUES (1, 2, 8, 'Clarinete SIB Screiber ', 'Modelo D12 Mini', 1390000, 05, 'https://ejemplo.com/imagen.jpg');
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, descripcion, precio, stock, url_producto)
VALUES (1, 2, 8, 'Clarinete SIB Screiber', 'Modelo D12 High', 1390000, 05, 'https://ejemplo.com/imagen.jpg');


/* INSERT TABLA imagenProducto */






/* INSERT TABLA metodoPago */

INSERT INTO metodoPago (nombre_metodo_pago, detalle_metodo_pago)
VALUES ('Tarjeta Credito', 'Visa, Mastercard, American Express');
INSERT INTO metodoPago (nombre_metodo_pago, detalle_metodo_pago)
VALUES ('Tarjeta Debito', 'Definida por el banco emisor');
INSERT INTO metodoPago (nombre_metodo_pago, detalle_metodo_pago)
VALUES ('PayPal', 'Servicio de pago en linea');
INSERT INTO metodoPago (nombre_metodo_pago, detalle_metodo_pago)
VALUES ('Transferencia Bancaria', 'Transferencia electronica mediante banco cliente');
INSERT INTO metodoPago (nombre_metodo_pago, detalle_metodo_pago)
VALUES ('Wallets Digital', 'Apple pay, Google Pay Samsung Pay');
INSERT INTO metodoPago (nombre_metodo_pago, detalle_metodo_pago)
VALUES ('Pago Movil', 'Aplicaciones moviles de empresas');

/* INSERT TABLA metodoEnvio */

INSERT INTO metodoEnvio (nombre, descripcion, costo_envio)
VALUES ('Envío Estándar', 'Entrega en 3-5 días hábiles', 5),
       ('Envío Express', 'Entrega en 1-2 días hábiles', 10),
       ('Recogida en Tienda', 'Recoge en nuestra tienda física', 0);


/* INSERT TABLA regionEnvio */

INSERT INTO regionEnvio (nombre, codigo_postal)
VALUES ('Región de Arica y Parinacota', 1100000),
       ('Región de Tarapacá', 1400000),
       ('Región de Antofagasta', 2100000),
       ('Región de Atacama', 2800000),
       ('Región de Coquimbo', 4100000),
       ('Región de Valparaíso', 5000000),
       ('Región Metropolitana de Santiago', 8000000),
       ('Región del Libertador General Bernardo O''Higgins', 2900000),
       ('Región del Maule', 3500000),
       ('Región de Ñuble', 3800000),
       ('Región del Biobío', 4100000),
       ('Región de La Araucanía', 4700000),
       ('Región de Los Ríos', 5200000),
       ('Región de Los Lagos', 5700000),
       ('Región de Aysén del General Carlos Ibáñez del Campo', 6200000),
       ('Región de Magallanes y de la Antártica Chilena', 6200000);



       