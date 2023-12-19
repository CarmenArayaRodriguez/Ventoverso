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

INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Clarinete Sib', 'Sistema Aleman.', 1, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Clarinete La', 'Sistema Aleman.', 1, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Clarinete Mib', 'Sistema Aleman.', 1, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Campanas y barriles', 'Campanas y barriles', 1, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Cañas Clarinete', 'Cañas Clarinete', 1, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Accesorios Clarinete', 'Campanas y barriletes.', 1, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');

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


/* INSERT TABLA Productos */
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales, precio, stock, estrellas)
VALUES (1, 2, 7, 'Clarinete SIB FAU_1', 'Modelo 621 hight', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 950000, 05, 1);
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales,precio, stock,  estrellas)
VALUES (1, 2, 7, 'Clarinete SIB FAU Mini', 'Modelo 621 mini', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 890000, 02, 4);
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales, precio, stock, estrellas)
VALUES (1, 2, 9, 'Clarinete SIB OA ', 'Modelo 320 High', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 1390000, 04, 2);
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales, precio, stock, estrellas)
VALUES (1, 2, 9, 'Clarinete SIB OA ', 'Modelo 320 Mini', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 1390000, 05, 5);
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales, precio, stock, estrellas)
VALUES (1, 2, 8, 'Clarinete SIB Screiber ', 'Modelo D12 Mini', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 1390000, 05, 3);
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales, precio, stock, estrellas)
VALUES (1, 2, 8, 'Clarinete SIB Screiber', 'Modelo D12 High', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 1390000, 05, 5);


/* INSERT TABLA imagenProducto */

INSERT INTO imagenProducto (id_producto, imagen)
VALUES (1, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');
INSERT INTO imagenProducto (id_producto, imagen)
VALUES (2, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');
INSERT INTO imagenProducto (id_producto, imagen)
VALUES (3, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');
INSERT INTO imagenProducto (id_producto, imagen)
VALUES (4, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');
INSERT INTO imagenProducto (id_producto, imagen)
VALUES (5, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');
INSERT INTO imagenProducto (id_producto, imagen)
VALUES (6, 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');


/* INSERT TABLA metodoPago */


INSERT INTO metodoPago (nombre_metodo_pago, detalle_metodo_pago)
VALUES ('WebPay', 'Servicio de pago en linea');
INSERT INTO metodoPago (nombre_metodo_pago, detalle_metodo_pago)
VALUES ('Transferencia Bancaria', 'Transferencia electronica mediante banco cliente');
INSERT INTO metodoPago (nombre_metodo_pago, detalle_metodo_pago)
VALUES ('Mercado Pago', 'Apple pay, Google Pay Samsung Pay');


/* INSERT TABLA metodoEnvio */

INSERT INTO metodoEnvio (nombre, descripcion, costo_envio)
VALUES ('Correos de Chile', 'Entrega en 2-5 días hábiles', 5990),
       ('Envío Express', 'Entrega en 2-5 días hábiles', 5990);
       


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


/* INSERT TABLA productoDestacado */
INSERT INTO `producto_destacado` (`id_producto`, `valoracion`, `descuento`, `FechaInicio`, `FechaFin`)
VALUES
    (1, '5 estrellas', 10, '2023-11-03', '2023-11-10'),
    (2, '4 estrellas', 15, '2023-11-05', '2023-11-12'),
    (3, '2 estrellas', 20, '2023-11-07', '2023-11-14'),
    (4, '3 estrellas', 5, '2023-11-09', '2023-11-16');
       

/* INSERT TABLA estadoCompra */

INSERT INTO `estadoCompra` (`estado`)
VALUES
    ('Pendiente'),
    ('En Proceso'),
    ('Enviado'),
    ('Entregado');


/* INSERT TABLA detalleCompra */
INSERT INTO `detalleCompra` (`id_producto`, `id_compra`)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4);


INSERT INTO `pago` (`id_compra`, `id_metodoPago`, `fcPago`, `estado`, `monto`)
VALUES
    (1, 1, '2023-11-03', 'Aprobado', 950000),
    (2, 2, '2023-11-04', 'Aprobado', 890000),
    (3, 1, '2023-11-05', 'Aprobado', 1390000),
    (4, 1, '2023-11-05', 'Aprobado', 1390000);



/* INSERT TABLA carrusel */
INSERT INTO `carrusel` (`nombre`, `descripcion`, `fechainicio`, `fechafin`, `imagenUrl`)
VALUES
    ('Carrusel de Ofertas', 'Descubre nuestras mejores ofertas en instrumentos', '2023-11-01', '2023-11-30', 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer'),
    ('Carrusel de Novedades', 'Explora los últimos lanzamientos en instrumentos', '2023-11-01', '2023-11-30', 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer'),
    ('Carrusel de Destacados', 'Los instrumentos más populares del mes', '2023-11-01', '2023-11-30', 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');



/* INSERT TABLA intermedia carruselProducto */


INSERT INTO `carruselProducto` (`id_producto`, `id_carrusel`)
VALUES
    (1, 1), -- Producto 1 en Carrusel 1 (Ofertas)
    (2, 1), -- Producto 2 en Carrusel 1 (Ofertas)
    (3, 2), -- Producto 3 en Carrusel 2 (Novedades)
    (4, 3); -- Producto 4 en Carrusel 3 (Destacados)

    /* INSERT TABLA carrito */
INSERT INTO carrito (rut_cliente, status_carrito, creacion_date) 
VALUES
    ('12227463', 'activo', CURDATE()),
    ('11222356', 'activo', CURDATE());

/* INSERT TABLA producto carrito */
INSERT INTO productoCarrito (id_carrito, id_producto, cantidad) 
VALUES
    (1, 1, 2), 
    (1, 2, 1),  
    (2, 3, 3);  

/*INSERT TABLA ArticuloByn*/
INSERT INTO articuloByn (rut_cliente, titulo, contenido, publicacion_date, autor, imagen)
VALUES 
('12227463', 'El Clarinete en la Música Clásica', 'Un artículo detallado sobre el uso del clarinete en la música clásica.', '2023-03-15', 'Juan Pérez', 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer'),
('11222356', 'Innovaciones en Clarinetes', 'Explorando las últimas innovaciones en el diseño y fabricación de clarinetes.', '2023-03-20', 'Felipe Contreras', 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer'),
('14333565', 'El Clarinete en el Jazz', 'Un análisis del papel del clarinete en el desarrollo del jazz.', '2023-03-25', 'Antonio Rojas', 'https://drive.google.com/uc?export=download&id=1TwrPeTEf5OZVc1yJrquSMq_TNsCVsaer');



/*INSERT TABLA Comentario*/
INSERT INTO `comentario` (`id_producto`, `nombreCliente`, `titulo`, `comentario`, `estrellas`, `fecha`, `megusta`, `nomegusta`, `denuncias`, `id_calificacion`) VALUES
(1,  'Juan Pérez','Excelente clarinete', 'Muy satisfecho con la compra, calidad de sonido excepcional.', 5, '2023-04-10', 10, 1, 0, 1),
(2, 'Felipe Contreras', 'Buen instrumento', 'Buena relación calidad-precio.', 4, '2023-04-11', 5, 2, 0, 2),
(3, 'Eduardo Pérez','Regular', 'Esperaba más por el precio.', 3, '2023-04-12', 2, 5, 1, 3),
(4, 'Antonio Rojas', '¡Impresionante!', 'Superó mis expectativas.', 5, '2023-04-13', 15, 0, 0, 4),
(5, 'Antonia González', 'No está mal', 'El clarinete es decente, pero he tenido mejores.', 3, '2023-04-14', 3, 4, 0, 5),
(1, 'Felipe Contreras', 'Excelente', 'El mejor clarinete que he tenido.', 5, '2023-04-15', 8, 1, 0, 6),
(2, 'Eduardo Pérez', 'No es lo que esperaba', 'Tiene un buen sonido, pero la fabricación es deficiente.', 2, '2023-04-16', 1, 6, 2, 7),
(3, 'Antonio Rojas', 'Muy bueno', 'Satisfecho con la compra, lo recomendaría.', 4, '2023-04-17', 4, 3, 0, 8),
(4, 'Juan Pérez', 'Perfecto para profesionales', 'Como músico profesional, lo recomiendo totalmente.', 5, '2023-04-18', 12, 1, 0, 9),
(5, 'Felipe Contreras', 'Calidad media', 'No está mal, pero hay mejores en el mercado.', 3, '2023-04-19', 2, 4, 1, 10);

/*INSERT TABLA Calificacion*/
INSERT INTO `calificacion` (`id_producto`, `nombreCliente`, `caracteristicas`, `sonido`, `fabricacion`, `id_comentario`) VALUES
(1,'Juan Pérez', 5, 4, 5, 1),
(2, 'Felipe Contreras', 4, 4, 3, 2),
(3, 'Eduardo Pérez', 3, 3, 2, 3),
(4, 'Antonio Rojas', 5, 5, 5, 4),
(4, 'Antonio Rojas', 5, 5, 5, 5),
(5, 'Antonia González', 2, 3, 3, 6),
(1, 'Felipe Contreras', 4, 5, 4, 7),
(2, 'Eduardo Pérez', 3, 2, 3, 8),
(3, 'Antonio Rojas', 4, 4, 4, 9),
(4, 'Juan Pérez', 5, 5, 5, 10);