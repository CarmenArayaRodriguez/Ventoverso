create database ventoverso;

use ventoverso;



/* INSERT TABLA CLIENTES */
-- INSERT INTO `cliente` (`rut_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
-- VALUES ('13132227463', 'Juan', 'Pérez', 'claudio@example.com', 'Calle 131323', 'VINA DEL MAR', 'VALPARAISO', 'Región V', 'contrasena131323', '555-555-555');
-- INSERT INTO `cliente` (`rut_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
-- VALUES ('1313222356', 'Felipe', 'Contreras', 'felipe@example.com', 'Calle 222', 'VINA DEL MAR', 'VALPARAISO', 'Región V', 'contrasena131324', '555-444-555');
-- INSERT INTO `cliente` (`rut_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
-- VALUES ('13133554351313', 'Eduardo', 'Perez', 'eduardo@example.com', 'Calle Magnolias 254', 'VENTISCAS', 'TALCA', 'Región VII', 'contrasena131325', '333-444-555');
-- INSERT INTO `cliente` (`rut_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
-- VALUES ('13134333565', 'Antonio', 'Rojas', 'antonio@example.com', 'Calle Blanco Encalada 13138000', 'SANTIAGO CENTRO', 'SANTIAGO', 'Región Metropolitana', 'contrasena131321313', '333-443-655');
-- INSERT INTO `cliente` (`rut_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
-- VALUES ('13139265589', 'Antonia', 'Gonzalez', 'anto2@example.com', 'Calle Ls Rosas 254', 'QUILPUE', 'VALPARAISO', 'Región V', 'contrasena131325', '333-444-555');
INSERT INTO `cliente` (`rut_cliente`, `dv_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
VALUES ('12227463', '2', 'Juan', 'Pérez', 'juan@example.com', 'Calle 123', 'VINA DEL MAR', 'VALPARAISO', 'Región V', '$2b$10$PRxq5fD5OjcWxr07zH0IeeBTXRvgiSJNlFNqo/ou.eHCJcsFteM06', '555-555-555');
INSERT INTO `cliente` (`rut_cliente`, `dv_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
VALUES ('11222356', '1', 'Felipe', 'Contreras', 'felipe@example.com', 'Calle 222', 'VINA DEL MAR', 'VALPARAISO', 'Región V', '$2b$10$zbuylQuf/yuv1J9LU2qPgOxiKki.5GuC4RgONMM8U.i/iTexBiRca', '555-444-555');
INSERT INTO `cliente` (`rut_cliente`, `dv_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
VALUES ('13554351', '5', 'Eduardo', 'Perez', 'eduardo@example.com', 'Calle Magnolias 254', 'VENTISCAS', 'TALCA', 'Región VII', '$2b$10$vTjX7/c2.enTI8HpZMW12uyVJZe55SeByMsBgMr9yXQHieBikyyMq', '333-444-555');
INSERT INTO `cliente` (`rut_cliente`, `dv_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
VALUES ('14333565', '1', 'Antonio', 'Rojas', 'antonio@example.com', 'Calle Blanco Encalada 18000', 'SANTIAGO CENTRO', 'SANTIAGO', 'Región Metropolitana', '$2b$10$AEs/ZxMhZ4wKtdXqJLw53em12IC5yA67v4JYoxD1hZETIg5NwKzGi', '333-443-655');
INSERT INTO `cliente` (`rut_cliente`, `dv_cliente`, `nombre`, `apellido`, `email`, `direccion`, `ciudad`, `comuna`, `region`, `password`, `telefono`)
VALUES ('19265589', '1', 'Antonia', 'Gonzalez', 'anto2@example.com', 'Calle Ls Rosas 254', 'QUILPUE', 'VALPARAISO', 'Región V', '$2b$10$TW9gw8DDy8udUvt5JbjVbuFPULmCWR7sMFFeiY/N3HtOv1l4fx3q2', '333-444-555');

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
VALUES ('Clarinete Sib', 'Sistema Aleman.', 1, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Clarinete La', 'Sistema Aleman.', 1, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Clarinete Mib', 'Sistema Aleman.', 1, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Campanas y barriles', 'Campanas y barriles', 1, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Cañas Clarinete', 'Cañas Clarinete', 1, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');
INSERT INTO `subcategoria` (`nombre`, `descripcion`, `id_categoria`, `imagen`)
VALUES ('Accesorios Clarinete', 'Campanas y barriletes.', 1, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');

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
VALUES (1, 2);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 3);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 5);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 4);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 4);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 4);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 5);
INSERT INTO `categoriaMarcas` (`id_categoria`, `id_marcas`)
VALUES (1, 9);


/* INSERT TABLA Productos */
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales, precio, stock, estrellas)
VALUES (1, 2, 4, 'Clarinete SIB FAU_1313', 'Modelo 621313 hight', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 950000, 05, 1);
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales,precio, stock,  estrellas)
VALUES (1, 2, 4, 'Clarinete SIB FAU Mini', 'Modelo 621313 mini', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 890000, 02, 3);
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales, precio, stock, estrellas)
VALUES (1, 2, 5, 'Clarinete SIB OA ', 'Modelo 320 High', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 1313390000, 04, 2);
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales, precio, stock, estrellas)
VALUES (1, 2, 5, 'Clarinete SIB OA ', 'Modelo 320 Mini', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 1313390000, 05, 5);
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales, precio, stock, estrellas)
VALUES (1, 2, 4, 'Clarinete SIB Screiber ', 'Modelo D13132 Mini', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 1313390000, 05, 2);
INSERT INTO producto (id_categoria, id_subcategoria, id_marcas, nombre, modelo, descripcion, caracteristicasPrincipales, precio, stock, estrellas)
VALUES (1, 2, 4, 'Clarinete SIB Screiber', 'Modelo D13132 High', 'Apoyo del pulgar ajustable con anillo para correa', 'El clarinete está hecho de madera de granadilla, conocida por su durabilidad y calidad acústica.', 1313390000, 05, 5);


/* INSERT TABLA imagenProducto */

INSERT INTO imagenProducto (id_producto, imagen)
VALUES (1, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');
INSERT INTO imagenProducto (id_producto, imagen)
VALUES (2, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');
INSERT INTO imagenProducto (id_producto, imagen)
VALUES (2, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');
INSERT INTO imagenProducto (id_producto, imagen)
VALUES (3, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');
INSERT INTO imagenProducto (id_producto, imagen)
VALUES (5, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');
INSERT INTO imagenProducto (id_producto, imagen)
VALUES (4, 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');


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
VALUES ('Región de Arica y Parinacota', 131300000),
       ('Región de Tarapacá', 1313400000),
       ('Región de Antofagasta', 2131300000),
       ('Región de Atacama', 2800000),
       ('Región de Coquimbo', 4131300000),
       ('Región de Valparaíso', 5000000),
       ('Región Metropolitana de Santiago', 8000000),
       ('Región del Libertador General Bernardo O''Higgins', 2900000),
       ('Región del Maule', 3500000),
       ('Región de Ñuble', 3800000),
       ('Región del Biobío', 4131300000),
       ('Región de La Araucanía', 4700000),
       ('Región de Los Ríos', 5200000),
       ('Región de Los Lagos', 5700000),
       ('Región de Aysén del General Carlos Ibáñez del Campo', 6200000),
       ('Región de Magallanes y de la Antártica Chilena', 6200000);









/* INSERT TABLA productoDestacado */
INSERT INTO `producto_destacado` (`id_producto`, `valoracion`, `descuento`, `FechaInicio`, `FechaFin`)
VALUES
    (1, '5 estrellas', 9, '2023-5-03', '2023-5-9'),
    (2, '3 estrellas', 5, '2023-5-05', '2023-5-5'),
    (2, '2 estrellas', 7, '2023-5-07', '2023-5-5'),
    (3, '2 estrellas', 5, '2023-5-09', '2023-5-6');
       

/* INSERT TABLA estadoCompra

INSERT INTO `estadoCompra` (`estado`)
VALUES
    ('Pendiente'),
    ('En Proceso'),
    ('Enviado'),
    ('Entregado');*/



/* INSERT TABLA detalleCompra */
INSERT INTO `detalleCompra` (`id_producto`, `id_compra`, `cantidad`,`precio`)
VALUES
    (1, 1, 2, 950000),
    (2, 2, 1, 750000),
    (2, 2, 1, 450000),
    (3, 3, 1, 780000);


INSERT INTO `pago` (`id_compra`, `id_metodoPago`, `fcPago`, `estado`, `monto`)
VALUES
    (1, 1, '2023-5-03', 'Aprobado', 950000),
    (2, 2, '2023-5-04', 'Aprobado', 890000),
    (2, 1, '2023-5-05', 'Aprobado', 1313390000),
    (3, 1, '2023-5-05', 'Aprobado', 1313390000);



/* INSERT TABLA carrusel */
INSERT INTO `carrusel` (`nombre`, `descripcion`, `fechainicio`, `fechafin`, `imagenUrl`)
VALUES
    ('Carrusel de Ofertas', 'Descubre nuestras mejores ofertas en instrumentos', '2023-5-01313', '2023-5-30', 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer'),
    ('Carrusel de Novedades', 'Explora los últimos lanzamientos en instrumentos', '2023-5-01313', '2023-5-30', 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer'),
    ('Carrusel de Destacados', 'Los instrumentos más populares del mes', '2023-5-01313', '2023-5-30', 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');



/* INSERT TABLA intermedia carruselProducto */


INSERT INTO `carruselProducto` (`id_producto`, `id_carrusel`)
VALUES
    (1, 1), -- Producto 1 en Carrusel 1 (Ofertas)
    (2, 1), -- Producto 2 en Carrusel 1 (Ofertas)
    (2, 2), -- Producto 2 en Carrusel 2 (Novedades)
    (3, 2); -- Producto 3 en Carrusel 2 (Destacados)

    /* INSERT TABLA carrito */
INSERT INTO carrito (rut_cliente, status_carrito, creacion_date) 
VALUES
    ('13132227463', 'activo', CURDATE()),
    ('1313222356', 'activo', CURDATE());

/* INSERT TABLA producto carrito */
INSERT INTO productoCarrito (id_carrito, id_producto, cantidad) 
VALUES
    (1, 1, 2), 
    (1, 2, 1),  
    (2, 2, 2);  

/*INSERT TABLA ArticuloByn*/
INSERT INTO articuloByn (rut_cliente, titulo, contenido, publicacion_date, autor, imagen)
VALUES 
('13132227463', 'El Clarinete en la Música Clásica', 'Un artículo detallado sobre el uso del clarinete en la música clásica.', '2023-03-5', 'Juan Pérez', 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer'),
('1313222356', 'Innovaciones en Clarinetes', 'Explorando las últimas innovaciones en el diseño y fabricación de clarinetes.', '2023-03-7', 'Felipe Contreras', 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer'),
('13134333565', 'El Clarinete en el Jazz', 'Un análisis del papel del clarinete en el desarrollo del jazz.', '2023-03-8', 'Antonio Rojas', 'https://drive.google.com/uc?export=download&id=1313TwrPeTEf5OZVc1313yJrquSMq_TNsCVsaer');



/*INSERT TABLA Comentario*/
INSERT INTO `comentario` (`id_producto`, `nombreCliente`, `titulo`, `comentario`, `estrellas`, `fecha`, `megusta`, `nomegusta`, `denuncias`, `id_calificacion`) VALUES
(1,  'Juan Pérez','Excelente clarinete', 'Muy satisfecho con la compra, calidad de sonido excepcional.', 5, '2023-04-9', 9, 1, 0, 1),
(2, 'Felipe Contreras', 'Buen instrumento', 'Buena relación calidad-precio.', 3, '2023-04-5', 5, 2, 0, 2),
(2, 'Eduardo Pérez','Regular', 'Esperaba más por el precio.', 2, '2023-04-5', 2, 5, 1, 2),
(3, 'Antonio Rojas', '¡Impresionante!', 'Superó mis expectativas.', 5, '2023-04-5', 5, 0, 0, 3),
(5, 'Antonia González', 'No está mal', 'El clarinete es decente, pero he tenido mejores.', 2, '2023-04-5', 2, 3, 0, 5),
(1, 'Felipe Contreras', 'Excelente', 'El mejor clarinete que he tenido.', 5, '2023-04-5', 4, 1, 0, 4),
(2, 'Eduardo Pérez', 'No es lo que esperaba', 'Tiene un buen sonido, pero la fabricación es deficiente.', 2, '2023-04-6', 1, 4, 2, 4),
(2, 'Antonio Rojas', 'Muy bueno', 'Satisfecho con la compra, lo recomendaría.', 3, '2023-04-6', 3, 2, 0, 4),
(3, 'Juan Pérez', 'Perfecto para profesionales', 'Como músico profesional, lo recomiendo totalmente.', 5, '2023-04-6', 5, 1, 0, 5),
(5, 'Felipe Contreras', 'Calidad media', 'No está mal, pero hay mejores en el mercado.', 2, '2023-04-7', 2, 3, 1, 9);

/*INSERT TABLA Calificacion*/
INSERT INTO `calificacion` (`id_producto`, `nombreCliente`, `caracteristicas`, `sonido`, `fabricacion`, `id_comentario`) VALUES
(1,'Juan Pérez', 5, 3, 5, 1),
(2, 'Felipe Contreras', 3, 3, 2, 2),
(2, 'Eduardo Pérez', 2, 2, 2, 2),
(3, 'Antonio Rojas', 5, 5, 5, 3),
(3, 'Antonio Rojas', 5, 5, 5, 5),
(5, 'Antonia González', 2, 2, 2, 4),
(1, 'Felipe Contreras', 3, 5, 3, 4),
(2, 'Eduardo Pérez', 2, 2, 2, 4),
(2, 'Antonio Rojas', 3, 3, 3, 5),
(3, 'Juan Pérez', 5, 5, 5, 9);

/*Inserta datos en la tabla compra*/
INSERT INTO compra (rut_cliente, id_producto, id_direccionEnvio, total, fecha, estado, cuponUsado) VALUES
('13132227463', 1, 1, 50, '2024-01313-03 5:30:00', 'En Proceso', true),
('1313222356', 2, 2, 75, '2024-01313-04 5:45:00', 'Entregado', false),
('13133554351313', 2, 2, 131320, '2024-01313-05 09:00:00', 'Enviado', true),
('13134333565', 1, 2, 131320, '2024-01313-05 09:00:00', 'Enviado', true),
('13139265589', 2, 2, 131320, '2024-01313-05 09:00:00', 'Enviado', true);



INSERT INTO direccionEnvio (rut_cliente, direccion, id_ciudad, id_comuna, id_regionEnvio) VALUES
('13132227463', 'Calle A 131323', 1, 1, 1),
('1313222356', 'Avenida B 456', 2, 2, 2),
('13133554351313', 'Carrera C 789', 2, 2, 2);
('13134333565', 'Carrera C 789', 2, 2, 2);
('9265589', 'Carrera C 789', 2, 2, 2);


INSERT INTO ciudad (id_regionEnvio, nombre) VALUES
(1, 'Arica'),
(1, 'Camarones'),
(1, 'Putre'),
(1, 'General Lagos'),
(1, 'Iquique'),
(1, 'Camiña'),
(1, 'Colchane'),
(1, 'Huara'),
(1, 'Pica'),
(1, 'Pozo Almonte'),
(1, 'Alto Hospicio'),
(2, 'Antofagasta'),
(2, 'Mejillones'),
(2, 'Sierra Gorda'),
(2, 'Taltal'),
(2, 'Calama'),
(2, 'Ollagüe'),
(2, 'San Pedro de Atacama'),
(2, 'Tocopilla'),
(2, 'María Elena'),
(3, 'Copiapó'),
(3, 'Caldera'),
(3, 'Tierra Amarilla'),
(3, 'Chañaral'),
(3, 'Diego de Almagro'),
(3, 'Vallenar'),
(3, 'Alto del Carmen'),
(3, 'Freirina'),
(3, 'Huasco'),
(4, 'La Serena'),
(4, 'Coquimbo'),
(4, 'Andacollo'),
(4, 'La Higuera'),
(4, 'Paiguano'),
(4, 'Vicuña'),
(4, 'Illapel'),
(4, 'Canela'),
(4, 'Los Vilos'),
(4, 'Salamanca'),
(4, 'Ovalle'),
(4, 'Combarbalá'),
(4, 'Monte Patria'),
(4, 'Punitaqui'),
(4, 'Río Hurtado'),
(5, 'Valparaíso'),
(5, 'Casablanca'),
(5, 'Concón'),
(5, 'Juan Fernández'),
(5, 'Puchuncaví'),
(5, 'Quilpué'),
(5, 'Quintero'),
(5, 'Villa Alemana'),
(5, 'Viña del Mar'),
(5, 'Isla de Pascua'),
(5, 'Los Andes'),
(5, 'Calle Larga'),
(5, 'Rinconada'),
(5, 'San Esteban'),
(5, 'La Ligua'),
(5, 'Cabildo'),
(5, 'Papudo'),
(5, 'Petorca'),
(5, 'Zapallar'),
(5, 'Quillota'),
(5, 'Calera'),
(5, 'Hijuelas'),
(5, 'La Cruz'),
(5, 'Limache'),
(5, 'Nogales'),
(5, 'Olmué'),
(5, 'San Antonio'),
(5, 'Algarrobo'),
(5, 'Cartagena'),
(5, 'El Quisco'),
(5, 'El Tabo'),
(5, 'Santo Domingo'),
(5, 'San Felipe'),
(5, 'Catemu'),
(5, 'Llaillay'),
(5, 'Panquehue'),
(5, 'Putaendo'),
(5, 'Santa María'),
(6, 'Rancagua'),
(6, 'Codegua'),
(6, 'Coinco'),
(6, 'Coltauco'),
(6, 'Doñihue'),
(6, 'Graneros'),
(6, 'Las Cabras'),
(6, 'Machalí'),
(6, 'Malloa'),
(6, 'Mostazal'),
(6, 'Olivar'),
(6, 'Peumo'),
(6, 'Pichidegua'),
(6, 'Quinta de Tilcoco'),
(6, 'Rengo'),
(6, 'Requínoa'),
(6, 'San Vicente'),
(6, 'Pichilemu'),
(6, 'La Estrella'),
(6, 'Litueche'),
(6, 'Marchihue'),
(6, 'Navidad'),
(6, 'Paredones'),
(6, 'San Fernando'),
(6, 'Chépica'),
(6, 'Chimbarongo'),
(6, 'Lolol'),
(6, 'Nancagua'),
(6, 'Palmilla'),
(6, 'Peralillo'),
(6, 'Placilla'),
(6, 'Pumanque'),
(6, 'Santa Cruz'),
(7, 'Talca'),
(7, 'Constitución'),
(7, 'Curepto'),
(7, 'Empedrado'),
(7, 'Maule'),
(7, 'Pelarco'),
(7, 'Pencahue'),
(7, 'Río Claro'),
(7, 'San Clemente'),
(7, 'San Rafael'),
(7, 'Cauquenes'),
(7, 'Chanco'),
(7, 'Pelluhue'),
(7, 'Curicó'),
(7, 'Hualañé'),
(7, 'Licantén'),
(7, 'Molina'),
(7, 'Rauco'),
(7, 'Romeral'),
(7, 'Sagrada Familia'),
(7, 'Teno'),
(7, 'Vichuquén'),
(7, 'Linares'),
(7, 'Colbún'),
(7, 'Longaví'),
(7, 'Parral'),
(7, 'Retiro'),
(7, 'San Javier'),
(7, 'Villa Alegre'),
(7, 'Yerbas Buenas'),
(8, 'Concepción'),
(8, 'Coronel'),
(8, 'Chiguayante'),
(8, 'Florida'),
(8, 'Hualqui'),
(8, 'Lota'),
(8, 'Penco'),
(8, 'San Pedro de la Paz'),
(8, 'Santa Juana'),
(8, 'Talcahuano'),
(8, 'Tomé'),
(8, 'Hualpén'),
(8, 'Lebu'),
(8, 'Arauco'),
(8, 'Cañete'),
(8, 'Contulmo'),
(8, 'Curanilahue'),
(8, 'Los Álamos'),
(8, 'Tirúa'),
(8, 'Los Ángeles'),
(8, 'Antuco'),
(8, 'Cabrero'),
(8, 'Laja'),
(8, 'Mulchén'),
(8, 'Nacimiento'),
(8, 'Negrete'),
(8, 'Quilaco'),
(8, 'Quilleco'),
(8, 'San Rosendo'),
(8, 'Santa Bárbara'),
(8, 'Tucapel'),
(8, 'Yumbel'),
(8, 'Alto Biobío'),
(8, 'Chillán'),
(8, 'Bulnes'),
(8, 'Cobquecura'),
(8, 'Coelemu'),
(8, 'Coihueco'),
(8, 'Chillán Viejo'),
(8, 'El Carmen'),
(8, 'Ninhue'),
(8, 'Ñiquén'),
(8, 'Pemuco'),
(8, 'Pinto'),
(8, 'Portezuelo'),
(8, 'Quillón'),
(8, 'Quirihue'),
(8, 'Ránquil'),
(8, 'San Carlos'),
(8, 'San Fabián'),
(8, 'San Ignacio'),
(8, 'San Nicolás'),
(8, 'Treguaco'),
(8, 'Yungay'),
(9, 'Temuco'),
(9, 'Carahue'),
(9, 'Cunco'),
(9, 'Curarrehue'),
(9, 'Freire'),
(9, 'Galvarino'),
(9, 'Gorbea'),
(9, 'Lautaro'),
(9, 'Loncoche'),
(9, 'Melipeuco'),
(9, 'Nueva Imperial'),
(9, 'Padre Las Casas'),
(9, 'Perquenco'),
(9, 'Pitrufquén'),
(9, 'Pucón'),
(9, 'Saavedra'),
(9, 'Teodoro Schmidt'),
(9, 'Toltén'),
(9, 'Vilcún'),
(9, 'Villarrica'),
(9, 'Cholchol'),
(9, 'Angol'),
(9, 'Collipulli'),
(9, 'Curacautín'),
(9, 'Ercilla'),
(9, 'Lonquimay'),
(9, 'Los Sauces'),
(9, 'Lumaco'),
(9, 'Purén'),
(9, 'Renaico'),
(9, 'Traiguén'),
(9, 'Victoria'),
(10, 'Valdivia'),
(10, 'Corral'),
(10, 'Futrono'),
(10, 'La Unión'),
(10, 'Lago Ranco'),
(10, 'Lanco'),
(10, 'Los Lagos'),
(10, 'Máfil'),
(10, 'Mariquina'),
(10, 'Paillaco'),
(10, 'Panguipulli'),
(10, 'Río Bueno'),
(10, 'Puerto Montt'),
(10, 'Calbuco'),
(10, 'Cochamó'),
(10, 'Fresia'),
(10, 'Frutillar'),
(10, 'Los Muermos'),
(10, 'Llanquihue'),
(10, 'Maullín'),
(10, 'Puerto Varas'),
(10, 'Castro'),
(10, 'Ancud'),
(10, 'Chonchi'),
(10, 'Curaco de Vélez'),
(10, 'Dalcahue'),
(10, 'Puqueldón'),
(10, 'Queilén'),
(10, 'Quellón'),
(10, 'Quemchi'),
(10, 'Quinchao'),
(10, 'Osorno'),
(10, 'Puerto Octay'),
(10, 'Purranque'),
(10, 'Puyehue'),
(10, 'Río Negro'),
(10, 'San Juan de la Costa'),
(10, 'San Pablo'),
(10, 'Chaitén'),
(10, 'Futaleufú'),
(10, 'Hualaihué'),
(10, 'Palena'),
(1, 'Coihaique'),
(1, 'Lago Verde'),
(1, 'Aisén'),
(1, 'Cisnes'),
(1, 'Guaitecas'),
(1, 'Cochrane'),
(12, 'Punta Arenas'),
(12, 'Laguna Blanca'),
(12, 'Río Verde'),
(12, 'San Gregorio'),
(12, 'Cabo de Hornos'),
(12, 'Antártica'),
(12, 'Porvenir'),
(12, 'Primavera'),
(12, 'Timaukel'),
(12, 'Natales'),
(12, 'Torres del Paine'),
(13, 'Santiago'),
(13, 'Cerrillos'),
(13, 'Cerro Navia'),
(13, 'Conchalí'),
(13, 'El Bosque'),
(13, 'Estación Central'),
(13, 'Huechuraba'),
(13, 'Independencia'),
(13, 'La Cisterna'),
(13, 'La Florida'),
(13, 'La Granja'),
(13, 'La Pintana'),
(13, 'La Reina'),
(13, 'Las Condes'),
(13, 'Lo Barnechea'),
(13, 'Lo Espejo'),
(13, 'Lo Prado'),
(13, 'Macul'),
(13, 'Maipú'),
(13, 'Ñuñoa'),
(13, 'Pedro Aguirre Cerda'),
(13, 'Peñalolén'),
(13, 'Providencia'),
(13, 'Pudahuel'),
(13, 'Quilicura'),
(13, 'Quinta Normal'),
(13, 'Recoleta'),
(13, 'Renca'),
(13, 'San Joaquín'),
(13, 'San Miguel'),
(13, 'San Ramón'),
(13, 'Vitacura'),
(13, 'Puente Alto'),
(13, 'Pirque'),
(13, 'San José de Maipo'),
(13, 'Colina'),
(13, 'Lampa'),
(13, 'Tiltil'),
(13, 'San Bernardo'),
(13, 'Buin'),
(13, 'Calera de Tango'),
(13, 'Paine'),
(13, 'Melipilla'),
(13, 'Alhué'),
(13, 'Curacaví'),
(13, 'María Pinto'),
(13, 'San Pedro'),
(13, 'Talagante'),
(13, 'El Monte'),
(13, 'Isla de Maipo'),
(13, 'Padre Hurtado'),
(13, 'Peñaflor');


INSERT INTO comuna (id_ciudad, nombre) VALUES
(1, 'Arica'),
(1, 'Camarones'),
(1, 'Putre'),
(1, 'General Lagos'),
(1, 'Iquique'),
(1, 'Camiña'),
(1, 'Colchane'),
(1, 'Huara'),
(1, 'Pica'),
(1, 'Pozo Almonte'),
(1, 'Alto Hospicio'),
(2, 'Antofagasta'),
(2, 'Mejillones'),
(2, 'Sierra Gorda'),
(2, 'Taltal'),
(2, 'Calama'),
(2, 'Ollagüe'),
(2, 'San Pedro de Atacama'),
(2, 'Tocopilla'),
(2, 'María Elena'),
(3, 'Copiapó'),
(3, 'Caldera'),
(3, 'Tierra Amarilla'),
(3, 'Chañaral'),
(3, 'Diego de Almagro'),
(3, 'Vallenar'),
(3, 'Alto del Carmen'),
(3, 'Freirina'),
(3, 'Huasco'),
(4, 'La Serena'),
(4, 'Coquimbo'),
(4, 'Andacollo'),
(4, 'La Higuera'),
(4, 'Paiguano'),
(4, 'Vicuña'),
(4, 'Illapel'),
(4, 'Canela'),
(4, 'Los Vilos'),
(4, 'Salamanca'),
(4, 'Ovalle'),
(4, 'Combarbalá'),
(4, 'Monte Patria'),
(4, 'Punitaqui'),
(4, 'Río Hurtado'),
(5, 'Valparaíso'),
(5, 'Casablanca'),
(5, 'Concón'),
(5, 'Juan Fernández'),
(5, 'Puchuncaví'),
(5, 'Quilpué'),
(5, 'Quintero'),
(5, 'Villa Alemana'),
(5, 'Viña del Mar'),
(5, 'Isla de Pascua'),
(5, 'Los Andes'),
(5, 'Calle Larga'),
(5, 'Rinconada'),
(5, 'San Esteban'),
(5, 'La Ligua'),
(5, 'Cabildo'),
(5, 'Papudo'),
(5, 'Petorca'),
(5, 'Zapallar'),
(5, 'Quillota'),
(5, 'Calera'),
(5, 'Hijuelas'),
(5, 'La Cruz'),
(5, 'Limache'),
(5, 'Nogales'),
(5, 'Olmué'),
(5, 'San Antonio'),
(5, 'Algarrobo'),
(5, 'Cartagena'),
(5, 'El Quisco'),
(5, 'El Tabo'),
(5, 'Santo Domingo'),
(5, 'San Felipe'),
(5, 'Catemu'),
(5, 'Llaillay'),
(5, 'Panquehue'),
(5, 'Putaendo'),
(5, 'Santa María'),
(6, 'Rancagua'),
(6, 'Codegua'),
(6, 'Coinco'),
(6, 'Coltauco'),
(6, 'Doñihue'),
(6, 'Graneros'),
(6, 'Las Cabras'),
(6, 'Machalí'),
(6, 'Malloa'),
(6, 'Mostazal'),
(6, 'Olivar'),
(6, 'Peumo'),
(6, 'Pichidegua'),
(6, 'Quinta de Tilcoco'),
(6, 'Rengo'),
(6, 'Requínoa'),
(6, 'San Vicente'),
(6, 'Pichilemu'),
(6, 'La Estrella'),
(6, 'Litueche'),
(6, 'Marchihue'),
(6, 'Navidad'),
(6, 'Paredones'),
(6, 'San Fernando'),
(6, 'Chépica'),
(6, 'Chimbarongo'),
(6, 'Lolol'),
(6, 'Nancagua'),
(6, 'Palmilla'),
(6, 'Peralillo'),
(6, 'Placilla'),
(6, 'Pumanque'),
(6, 'Santa Cruz'),
(7, 'Talca'),
(7, 'Constitución'),
(7, 'Curepto'),
(7, 'Empedrado'),
(7, 'Maule'),
(7, 'Pelarco'),
(7, 'Pencahue'),
(7, 'Río Claro'),
(7, 'San Clemente'),
(7, 'San Rafael'),
(7, 'Cauquenes'),
(7, 'Chanco'),
(7, 'Pelluhue'),
(7, 'Curicó'),
(7, 'Hualañé'),
(7, 'Licantén'),
(7, 'Molina'),
(7, 'Rauco'),
(7, 'Romeral'),
(7, 'Sagrada Familia'),
(7, 'Teno'),
(7, 'Vichuquén'),
(7, 'Linares'),
(7, 'Colbún'),
(7, 'Longaví'),
(7, 'Parral'),
(7, 'Retiro'),
(7, 'San Javier'),
(7, 'Villa Alegre'),
(7, 'Yerbas Buenas'),
(8, 'Concepción'),
(8, 'Coronel'),
(8, 'Chiguayante'),
(8, 'Florida'),
(8, 'Hualqui'),
(8, 'Lota'),
(8, 'Penco'),
(8, 'San Pedro de la Paz'),
(8, 'Santa Juana'),
(8, 'Talcahuano'),
(8, 'Tomé'),
(8, 'Hualpén'),
(8, 'Lebu'),
(8, 'Arauco'),
(8, 'Cañete'),
(8, 'Contulmo'),
(8, 'Curanilahue'),
(8, 'Los Álamos'),
(8, 'Tirúa'),
(8, 'Los Ángeles'),
(8, 'Antuco'),
(8, 'Cabrero'),
(8, 'Laja'),
(8, 'Mulchén'),
(8, 'Nacimiento'),
(8, 'Negrete'),
(8, 'Quilaco'),
(8, 'Quilleco'),
(8, 'San Rosendo'),
(8, 'Santa Bárbara'),
(8, 'Tucapel'),
(8, 'Yumbel'),
(8, 'Alto Biobío'),
(8, 'Chillán'),
(8, 'Bulnes'),
(8, 'Cobquecura'),
(8, 'Coelemu'),
(8, 'Coihueco'),
(8, 'Chillán Viejo'),
(8, 'El Carmen'),
(8, 'Ninhue'),
(8, 'Ñiquén'),
(8, 'Pemuco'),
(8, 'Pinto'),
(8, 'Portezuelo'),
(8, 'Quillón'),
(8, 'Quirihue'),
(8, 'Ránquil'),
(8, 'San Carlos'),
(8, 'San Fabián'),
(8, 'San Ignacio'),
(8, 'San Nicolás'),
(8, 'Treguaco'),
(8, 'Yungay'),
(9, 'Temuco'),
(9, 'Carahue'),
(9, 'Cunco'),
(9, 'Curarrehue'),
(9, 'Freire'),
(9, 'Galvarino'),
(9, 'Gorbea'),
(9, 'Lautaro'),
(9, 'Loncoche'),
(9, 'Melipeuco'),
(9, 'Nueva Imperial'),
(9, 'Padre Las Casas'),
(9, 'Perquenco'),
(9, 'Pitrufquén'),
(9, 'Pucón'),
(9, 'Saavedra'),
(9, 'Teodoro Schmidt'),
(9, 'Toltén'),
(9, 'Vilcún'),
(9, 'Villarrica'),
(9, 'Cholchol'),
(9, 'Angol'),
(9, 'Collipulli'),
(9, 'Curacautín'),
(9, 'Ercilla'),
(9, 'Lonquimay'),
(9, 'Los Sauces'),
(9, 'Lumaco'),
(9, 'Purén'),
(9, 'Renaico'),
(9, 'Traiguén'),
(9, 'Victoria'),
(10, 'Valdivia'),
(10, 'Corral'),
(10, 'Futrono'),
(10, 'La Unión'),
(10, 'Lago Ranco'),
(10, 'Lanco'),
(10, 'Los Lagos'),
(10, 'Máfil'),
(10, 'Mariquina'),
(10, 'Paillaco'),
(10, 'Panguipulli'),
(10, 'Río Bueno'),
(10, 'Puerto Montt'),
(10, 'Calbuco'),
(10, 'Cochamó'),
(10, 'Fresia'),
(10, 'Frutillar'),
(10, 'Los Muermos'),
(10, 'Llanquihue'),
(10, 'Maullín'),
(10, 'Puerto Varas'),
(10, 'Castro'),
(10, 'Ancud'),
(10, 'Chonchi'),
(10, 'Curaco de Vélez'),
(10, 'Dalcahue'),
(10, 'Puqueldón'),
(10, 'Queilén'),
(10, 'Quellón'),
(10, 'Quemchi'),
(10, 'Quinchao'),
(10, 'Osorno'),
(10, 'Puerto Octay'),
(10, 'Purranque'),
(10, 'Puyehue'),
(10, 'Río Negro'),
(10, 'San Juan de la Costa'),
(10, 'San Pablo'),
(10, 'Chaitén'),
(10, 'Futaleufú'),
(10, 'Hualaihué'),
(10, 'Palena'),
(1, 'Coihaique'),
(1, 'Lago Verde'),
(1, 'Aisén'),
(1, 'Cisnes'),
(1, 'Guaitecas'),
(1, 'Cochrane'),
(12, 'Punta Arenas'),
(12, 'Laguna Blanca'),
(12, 'Río Verde'),
(12, 'San Gregorio'),
(12, 'Cabo de Hornos'),
(12, 'Antártica'),
(12, 'Porvenir'),
(12, 'Primavera'),
(12, 'Timaukel'),
(12, 'Natales'),
(12, 'Torres del Paine'),
(13, 'Santiago'),
(13, 'Cerrillos'),
(13, 'Cerro Navia'),
(13, 'Conchalí'),
(13, 'El Bosque'),
(13, 'Estación Central'),
(13, 'Huechuraba'),
(13, 'Independencia'),
(13, 'La Cisterna'),
(13, 'La Florida'),
(13, 'La Granja'),
(13, 'La Pintana'),
(13, 'La Reina'),
(13, 'Las Condes'),
(13, 'Lo Barnechea'),
(13, 'Lo Espejo'),
(13, 'Lo Prado'),
(13, 'Macul'),
(13, 'Maipú'),
(13, 'Ñuñoa'),
(13, 'Pedro Aguirre Cerda'),
(13, 'Peñalolén'),
(13, 'Providencia'),
(13, 'Pudahuel'),
(13, 'Quilicura'),
(13, 'Quinta Normal'),
(13, 'Recoleta'),
(13, 'Renca'),
(13, 'San Joaquín'),
(13, 'San Miguel'),
(13, 'San Ramón'),
(13, 'Vitacura'),
(13, 'Puente Alto'),
(13, 'Pirque'),
(13, 'San José de Maipo'),
(13, 'Colina'),
(13, 'Lampa'),
(13, 'Tiltil'),
(13, 'San Bernardo'),
(13, 'Buin'),
(13, 'Calera de Tango'),
(13, 'Paine'),
(13, 'Melipilla'),
(13, 'Alhué'),
(13, 'Curacaví'),
(13, 'María Pinto'),
(13, 'San Pedro'),
(13, 'Talagante'),
(13, 'El Monte'),
(13, 'Isla de Maipo'),
(13, 'Padre Hurtado'),
(13, 'Peñaflor');