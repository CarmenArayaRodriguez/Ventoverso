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



/* INSERT TABLA CATEGORIA_MARCAS */

INSERT INTO `categoria_marcas` (`id_categoria`, `id_marcas`)
VALUES (1, 1);
INSERT INTO `categoria_marcas` (`id_categoria`, `id_marcas`)
VALUES (1, 2);
INSERT INTO `categoria_marcas` (`id_categoria`, `id_marcas`)
VALUES (1, 3);
INSERT INTO `categoria_marcas` (`id_categoria`, `id_marcas`)
VALUES (1, 4);
INSERT INTO `categoria_marcas` (`id_categoria`, `id_marcas`)
VALUES (1, 5);

