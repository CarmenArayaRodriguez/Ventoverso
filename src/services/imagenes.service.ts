import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises as fs } from 'fs';
import { ImagenProducto } from 'src/entities/imagen-producto.entity';
import { Producto } from 'src/entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagenesService {
    constructor(
        @InjectRepository(ImagenProducto)
        private imagenProductoRepository: Repository<ImagenProducto>,
    ) { }
    async writeFileBase64(nombreArchivo: string, texto: string): Promise<string> {
        try {
            await fs.writeFile(`imagenes/${nombreArchivo}`, texto, 'base64');
            return 'Archivo escrito exitosamente.';
        } catch (error) {
            console.error('Error al escribir el archivo:', error);
            throw new Error('Error al escribir el archivo');
        }
    }
    //Tensformar un archivo a Base64
    async readFile(nombreArchivo: string): Promise<string> {
        try {
            console.log(`Leyendo archivo: imagenes/${nombreArchivo}`);
            const buffer = await fs.readFile(`imagenes/${nombreArchivo}`);
            const contenido = buffer.toString('base64');
            return contenido;
        } catch (error) {
            console.error('Error al leer el archivo');
            console.error(error);
            throw new Error('Error al leer el archivo');
        }
    }


    // Guardar imagen desde base64
    async saveBase64Image(nombreArchivo: string, base64Data: string): Promise<string> {
        if (!base64Data) {
            throw new Error('No se proporcionó datos en base64');
        }
        try {
            const buffer = Buffer.from(base64Data, 'base64');
            await fs.writeFile(`imagenes/${nombreArchivo}`, buffer);
            return `Archivo ${nombreArchivo} guardado desde base64`;
        } catch (error) {
            console.error('Error al guardar imagen desde base64:', error);
            throw new Error('Error al guardar la imagen en base64');
        }
    }

    // Guardar imagen desde un archivo binario
    async saveBinaryImage(nombreArchivo: string, fileBuffer: Buffer): Promise<string> {
        try {
            await fs.writeFile(`imagenes/${nombreArchivo}`, fileBuffer);
            return `Archivo ${nombreArchivo} guardado desde binario`;
        } catch (error) {
            console.error('Error al guardar imagen desde binario:', error);
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
        console.log(`Obteniendo ruta de imagen para el producto con ID: ${idProducto}`);
        try {
            const imagenProducto = await this.imagenProductoRepository.findOne({
                where: { idProducto: idProducto },
                select: ['imagen']
            });
            console.log('Resultado de la consulta:', imagenProducto);

            if (!imagenProducto) {
                throw new Error('Imagen no encontrada para el producto especificado');
            }

            return imagenProducto.imagen;
        } catch (error) {
            console.error('Error al obtener la ruta de la imagen:', error);
            throw new Error('Error al obtener la ruta de la imagen');
        }
    }

}