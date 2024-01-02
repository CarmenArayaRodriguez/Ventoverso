import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises as fs } from 'fs';
import { ImagenProducto } from 'src/entities/imagen-producto.entity';
import { Producto } from 'src/entities/producto.entity';
import { Repository } from 'typeorm';
import * as path from 'path';

@Injectable()
export class ImagenesService {
    private readonly logger = new Logger(ImagenesService.name);

    constructor(
        @InjectRepository(ImagenProducto)
        private imagenProductoRepository: Repository<ImagenProducto>,
    ) { }
    async escribirArchivoBase64(nombreArchivo: string, texto: string): Promise<string> {
        try {
            await fs.writeFile(`../front-ventoverso/public/imagenes-producto/${nombreArchivo}`, texto, 'base64');
            return 'Archivo escrito exitosamente.';
        } catch (error) {
            this.logger.error('Error al escribir el archivo:', error);
            throw new Error('Error al escribir el archivo');
        }
    }
    //Transformar un archivo a Base64
    async leerArchivo(nombreArchivo: string): Promise<string> {
        try {
            const rutaCompleta = path.join(__dirname, '../../', nombreArchivo);
            this.logger.log(`Leyendo archivo: ${rutaCompleta}`);
            const buffer = await fs.readFile(rutaCompleta);
            const contenido = buffer.toString('base64');
            return contenido;
        } catch (error) {
            this.logger.error('Error al leer el archivo');
            this.logger.error(error);
            throw new Error('Error al leer el archivo');
        }
    }


    // Guardar imagen desde base64
    async guardarImagenBase64(nombreArchivo: string, datosBase64: string): Promise<string> {
        if (!datosBase64) {
            throw new Error('No se proporcionó datos en base64');
        }
        try {
            const buffer = Buffer.from(datosBase64, 'base64');
            await fs.writeFile(`../front-ventoverso/public/imagenes-producto/${nombreArchivo}`, buffer);
            return `Archivo ${nombreArchivo} guardado desde base64`;
        } catch (error) {
            this.logger.error('Error al guardar imagen desde base64:', error);
            throw new Error('Error al guardar la imagen en base64');
        }
    }

    // Guardar imagen desde un archivo binario
    async guardarImagenBinaria(nombreArchivo: string, bufferArchivo: Buffer): Promise<string> {
        try {
            await fs.writeFile(`../front-ventoverso/public/imagenes-producto/${nombreArchivo}`, bufferArchivo);
            return `Archivo ${nombreArchivo} guardado desde binario`;
        } catch (error) {
            this.logger.error('Error al guardar imagen desde binario:', error);
            throw new Error('Error al guardar la imagen en binario');
        }
    }

    //Guardar ruta en base de datos
    async guardarRutaImagenProducto(idProducto: number, rutaImagen: string): Promise<ImagenProducto> {
        const imagenProducto = new ImagenProducto();
        imagenProducto.producto = { id: idProducto } as Producto;
        imagenProducto.imagen = rutaImagen;

        return this.imagenProductoRepository.save(imagenProducto);
    }

    //Recuperar la ruta de una imagen
    async obtenerRutaImagenProducto(idProducto: number): Promise<string> {
        this.logger.log(`Obteniendo ruta de imagen para el producto con ID: ${idProducto}`);
        try {
            const imagenProducto = await this.imagenProductoRepository.findOne({
                where: { idProducto: idProducto },
                select: ['imagen']
            });
            this.logger.log('Resultado de la consulta:', imagenProducto);

            if (!imagenProducto) {
                throw new Error('Imagen no encontrada para el producto especificado');
            }

            return imagenProducto.imagen;
        } catch (error) {
            this.logger.error('Error al obtener la ruta de la imagen:', error);
            throw new Error('Error al obtener la ruta de la imagen');
        }
    }

}