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
(1, 'General Lagos'),
(1, 'Putre'),
(2, 'Iquique'),
(2, 'Alto Hospicio'),
(2, 'Pica'),
(2, 'Huara'),
(2, 'Camiña'),
(2, 'Colchane'),
(3, 'Antofagasta'),
(3, 'Mejillones'),
(3, 'Sierra Gorda'),
(3, 'Taltal'),
(3, 'Calama'),
(3, 'Ollagüe'),
(3, 'San Pedro de Atacama'),
(3, 'Tocopilla'),
(3, 'María Elena'),
(4, 'Copiapó'),
(4, 'Caldera'),
(4, 'Tierra Amarilla'),
(4, 'Freirina'),
(4, 'Vallenar'),
(4, 'Huasco'),
(5, 'La Serena'),
(5, 'Coquimbo'),
(5, 'Andacollo'),
(5, 'La Higuera'),
(5, 'Paihuano'),
(5, 'Vicuña'),
(5, 'Illapel'),
(5, 'Canela'),
(5, 'Los Vilos'),
(5, 'Salamanca'),
(5, 'Ovalle'),
(5, 'Combarbalá'),
(5, 'Monte Patria'),
(5, 'Punitaqui'),
(5, 'Río Hurtado'),
(6, 'Valparaíso'),
(6, 'Casablanca'),
(6, 'Concón'),
(6, 'Juan Fernández'),
(6, 'Puchuncaví'),
(6, 'Quintero'),
(6, 'Viña del Mar'),
(6, 'Isla de Pascua'),
(6, 'Los Andes'),
(6, 'Calle Larga'),
(6, 'Rinconada'),
(6, 'San Esteban'),
(6, 'La Ligua'),
(6, 'Cabildo'),
(6, 'Papudo'),
(6, 'Petorca'),
(6, 'Zapallar'),
(6, 'Quillota'),
(6, 'Calera'),
(6, 'Hijuelas'),
(6, 'La Cruz'),
(6, 'Nogales'),
(6, 'Quilpué'),
(6, 'Limache'),
(6, 'Olmué'),
(6, 'Villa Alemana'),
(7, 'Santiago'),
(7, 'Cerrillos'),
(7, 'Cerro Navia'),
(7, 'Conchalí'),
(7, 'El Bosque'),
(7, 'Estación Central'),
(7, 'Huechuraba'),
(7, 'Independencia'),
(7, 'La Cisterna'),
(7, 'La Florida'),
(7, 'La Granja'),
(7, 'La Pintana'),
(7, 'La Reina'),
(7, 'Las Condes'),
(7, 'Lo Barnechea'),
(7, 'Lo Espejo'),
(7, 'Lo Prado'),
(7, 'Macul'),
(7, 'Maipú'),
(7, 'Ñuñoa'),
(7, 'Pedro Aguirre Cerda'),
(7, 'Peñalolén'),
(7, 'Providencia'),
(7, 'Pudahuel'),
(7, 'Puente Alto'),
(7, 'Quilicura'),
(7, 'Quinta Normal'),
(7, 'Recoleta'),
(7, 'Renca'),
(7, 'San Bernardo'),
(7, 'San Joaquín'),
(7, 'San José de Maipo'),
(7, 'San Miguel'),
(7, 'San Pedro'),
(7, 'San Ramón'),
(7, 'Vitacura'),
(8, 'Rancagua'),
(8, 'Codegua'),
(8, 'Coinco'),
(8, 'Coltauco'),
(8, 'Doñihue'),
(8, 'Graneros'),
(8, 'Las Cabras'),
(8, 'Machalí'),
(8, 'Malloa'),
(8, 'Mostazal'),
(8, 'Olivar'),
(8, 'Peumo'),
(8, 'Pichidegua'),
(8, 'Quinta de Tilcoco'),
(8, 'Rengo'),
(8, 'Requínoa'),
(8, 'San Vicente'),
(8, 'Pichilemu'),
(8, 'La Estrella'),
(8, 'Litueche'),
(8, 'Marchihue'),
(8, 'Navidad'),
(8, 'Paredones'),
(9, 'Talca'),
(9, 'Constitución'),
(9, 'Curepto'),
(9, 'Empedrado'),
(9, 'Maule'),
(9, 'Pelarco'),
(9, 'Pencahue'),
(9, 'Río Claro'),
(9, 'San Clemente'),
(9, 'San Rafael'),
(9, 'Cauquenes'),
(9, 'Chanco'),
(9, 'Pelluhue'),
(10, 'Chillán'),
(10, 'Bulnes'),
(10, 'Cobquecura'),
(10, 'Coelemu'),
(10, 'Ñiquén'),
(10, 'Portezuelo'),
(10, 'Quillón'),
(10, 'Quirihue'),
(10, 'Ránquil'),
(10, 'San Carlos'),
(10, 'San Fabián'),
(10, 'San Ignacio'),
(10, 'San Nicolás'),
(10, 'Treguaco'),
(10, 'Yungay'),
(11, 'Concepción'),
(11, 'Coronel'),
(11, 'Chiguayante'),
(11, 'Florida'),
(11, 'Hualqui'),
(11, 'Lota'),
(11, 'Penco'),
(11, 'San Pedro de la Paz'),
(11, 'Santa Juana'),
(11, 'Talcahuano'),
(11, 'Tomé'),
(11, 'Hualpén'),
(11, 'Lebu'),
(11, 'Arauco'),
(11, 'Cañete'),
(11, 'Contulmo'),
(11, 'Curanilahue'),
(11, 'Los Álamos'),
(11, 'Tirúa'),
(12, 'Temuco'),
(12, 'Carahue'),
(12, 'Cunco'),
(12, 'Curarrehue'),
(12, 'Freire'),
(12, 'Galvarino'),
(12, 'Gorbea'),
(12, 'Lautaro'),
(12, 'Loncoche'),
(12, 'Melipeuco'),
(12, 'Nueva Imperial'),
(12, 'Padre las Casas'),
(12, 'Perquenco'),
(12, 'Pitrufquén'),
(12, 'Pucón'),
(12, 'Saavedra'),
(12, 'Teodoro Schmidt'),
(12, 'Toltén'),
(12, 'Vilcún'),
(12, 'Villarrica'),
(12, 'Cholchol'),
(13, 'Valdivia'),
(13, 'Corral'),
(13, 'Lanco'),
(13, 'Los Lagos'),
(13, 'Máfil'),
(13, 'Mariquina'),
(13, 'Paillaco'),
(13, 'Panguipulli'),
(14, 'Puerto Montt'),
(14, 'Calbuco'),
(14, 'Cochamó'),
(14, 'Maullín'),
(14, 'Puerto Varas'),
(14, 'Castro'),
(14, 'Ancud'),
(14, 'Chonchi'),
(14, 'Curaco de Vélez'),
(14, 'Dalcahue'),
(14, 'Puqueldón'),
(14, 'Queilén'),
(14, 'Quellón'),
(14, 'Quemchi'),
(14, 'Quinchao'),
(15, 'Coyhaique'),
(16, 'Puerto Natales'),
(16, 'Punta Arenas'),
(16, 'Porvenir'),
(16, 'Puerto Williams');





INSERT INTO comuna (id_ciudad, nombre) VALUES

(1, 'Arica'),
(1, 'Camarones'),
(1, 'General Lagos'),
(1, 'Putre'),
(2, 'Iquique'),
(2, 'Alto Hospicio'),
(2, 'Pica'),
(2, 'Huara'),
(2, 'Camiña'),
(2, 'Colchane'),
(3, 'Antofagasta'),
(3, 'Mejillones'),
(3, 'Sierra Gorda'),
(3, 'Taltal'),
(3, 'Calama'),
(3, 'Ollagüe'),
(3, 'San Pedro de Atacama'),
(3, 'Tocopilla'),
(3, 'María Elena'),
(4, 'Copiapó'),
(4, 'Caldera'),
(4, 'Tierra Amarilla'),
(4, 'Freirina'),
(4, 'Vallenar'),
(4, 'Huasco'),
(5, 'La Serena'),
(5, 'Coquimbo'),
(5, 'Andacollo'),
(5, 'La Higuera'),
(5, 'Paihuano'),
(5, 'Vicuña'),
(5, 'Illapel'),
(5, 'Canela'),
(5, 'Los Vilos'),
(5, 'Salamanca'),
(5, 'Ovalle'),
(5, 'Combarbalá'),
(5, 'Monte Patria'),
(5, 'Punitaqui'),
(5, 'Río Hurtado'),
(6, 'Valparaíso'),
(6, 'Casablanca'),
(6, 'Concón'),
(6, 'Juan Fernández'),
(6, 'Puchuncaví'),
(6, 'Quintero'),
(6, 'Viña del Mar'),
(6, 'Isla de Pascua'),
(6, 'Los Andes'),
(6, 'Calle Larga'),
(6, 'Rinconada'),
(6, 'San Esteban'),
(6, 'La Ligua'),
(6, 'Cabildo'),
(6, 'Papudo'),
(6, 'Petorca'),
(6, 'Zapallar'),
(6, 'Quillota'),
(6, 'Calera'),
(6, 'Hijuelas'),
(6, 'La Cruz'),
(6, 'Nogales'),
(6, 'Quilpué'),
(6, 'Limache'),
(6, 'Olmué'),
(6, 'Villa Alemana'),
(7, 'Santiago'),
(7, 'Cerrillos'),
(7, 'Cerro Navia'),
(7, 'Conchalí'),
(7, 'El Bosque'),
(7, 'Estación Central'),
(7, 'Huechuraba'),
(7, 'Independencia'),
(7, 'La Cisterna'),
(7, 'La Florida'),
(7, 'La Granja'),
(7, 'La Pintana'),
(7, 'La Reina'),
(7, 'Las Condes'),
(7, 'Lo Barnechea'),
(7, 'Lo Espejo'),
(7, 'Lo Prado'),
(7, 'Macul'),
(7, 'Maipú'),
(7, 'Ñuñoa'),
(7, 'Pedro Aguirre Cerda'),
(7, 'Peñalolén'),
(7, 'Providencia'),
(7, 'Pudahuel'),
(7, 'Puente Alto'),
(7, 'Quilicura'),
(7, 'Quinta Normal'),
(7, 'Recoleta'),
(7, 'Renca'),
(7, 'San Bernardo'),
(7, 'San Joaquín'),
(7, 'San José de Maipo'),
(7, 'San Miguel'),
(7, 'San Pedro'),
(7, 'San Ramón'),
(7, 'Vitacura'),
(8, 'Rancagua'),
(8, 'Codegua'),
(8, 'Coinco'),
(8, 'Coltauco'),
(8, 'Doñihue'),
(8, 'Graneros'),
(8, 'Las Cabras'),
(8, 'Machalí'),
(8, 'Malloa'),
(8, 'Mostazal'),
(8, 'Olivar'),
(8, 'Peumo'),
(8, 'Pichidegua'),
(8, 'Quinta de Tilcoco'),
(8, 'Rengo'),
(8, 'Requínoa'),
(8, 'San Vicente'),
(8, 'Pichilemu'),
(8, 'La Estrella'),
(8, 'Litueche'),
(8, 'Marchihue'),
(8, 'Navidad'),
(8, 'Paredones'),
(9, 'Talca'),
(9, 'Constitución'),
(9, 'Curepto'),
(9, 'Empedrado'),
(9, 'Maule'),
(9, 'Pelarco'),
(9, 'Pencahue'),
(9, 'Río Claro'),
(9, 'San Clemente'),
(9, 'San Rafael'),
(9, 'Cauquenes'),
(9, 'Chanco'),
(9, 'Pelluhue'),
(10, 'Chillán'),
(10, 'Bulnes'),
(10, 'Cobquecura'),
(10, 'Coelemu'),
(10, 'Ñiquén'),
(10, 'Portezuelo'),
(10, 'Quillón'),
(10, 'Quirihue'),
(10, 'Ránquil'),
(10, 'San Carlos'),
(10, 'San Fabián'),
(10, 'San Ignacio'),
(10, 'San Nicolás'),
(10, 'Treguaco'),
(10, 'Yungay'),
(11, 'Concepción'),
(11, 'Coronel'),
(11, 'Chiguayante'),
(11, 'Florida'),
(11, 'Hualqui'),
(11, 'Lota'),
(11, 'Penco'),
(11, 'San Pedro de la Paz'),
(11, 'Santa Juana'),
(11, 'Talcahuano'),
(11, 'Tomé'),
(11, 'Hualpén'),
(11, 'Lebu'),
(11, 'Arauco'),
(11, 'Cañete'),
(11, 'Contulmo'),
(11, 'Curanilahue'),
(11, 'Los Álamos'),
(11, 'Tirúa'),
(12, 'Temuco'),
(12, 'Carahue'),
(12, 'Cunco'),
(12, 'Curarrehue'),
(12, 'Freire'),
(12, 'Galvarino'),
(12, 'Gorbea'),
(12, 'Lautaro'),
(12, 'Loncoche'),
(12, 'Melipeuco'),
(12, 'Nueva Imperial'),
(12, 'Padre las Casas'),
(12, 'Perquenco'),
(12, 'Pitrufquén'),
(12, 'Pucón'),
(12, 'Saavedra'),
(12, 'Teodoro Schmidt'),
(12, 'Toltén'),
(12, 'Vilcún'),
(12, 'Villarrica'),
(12, 'Cholchol'),
(13, 'Valdivia'),
(13, 'Corral'),
(13, 'Lanco'),
(13, 'Los Lagos'),
(13, 'Máfil'),
(13, 'Mariquina'),
(13, 'Paillaco'),
(13, 'Panguipulli'),
(14, 'Puerto Montt'),
(14, 'Calbuco'),
(14, 'Cochamó'),
(14, 'Maullín'),
(14, 'Puerto Varas'),
(14, 'Castro'),
(14, 'Ancud'),
(14, 'Chonchi'),
(14, 'Curaco de Vélez'),
(14, 'Dalcahue'),
(14, 'Puqueldón'),
(14, 'Queilén'),
(14, 'Quellón'),
(14, 'Quemchi'),
(14, 'Quinchao'),
(15, 'Coyhaique'),
(16, 'Puerto Natales'),
(16, 'Punta Arenas'),
(16, 'Porvenir'),
(16, 'Puerto Williams');



