import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrusel } from 'src/entities/carrusel.entity';
import { ImagenProducto } from 'src/entities/imagen.entity';

@Injectable()
export class CarruselService {
    constructor(
        @InjectRepository(Carrusel) private carruselRepo: Repository<Carrusel>,
        @InjectRepository(ImagenProducto) private imagenProductoRepo: Repository<ImagenProducto>
    ) { }

    async obtenerCarrusel(id: number): Promise<Carrusel> {
        const carrusel = await this.carruselRepo.findOne({ where: { id }, relations: ['productos'] });
        if (!carrusel) {
            throw new NotFoundException(`Carrusel con ID ${id} no encontrado.`);
        }

        if (carrusel.productos && carrusel.productos.length > 0) {

            for (const producto of carrusel.productos) {
                const imagenes = await this.imagenProductoRepo.find({ where: { producto } });
                producto.imagenes = imagenes;
            }
        } else {

            if (!carrusel.imagenUrl) {

                carrusel.imagenUrl = carrusel.imagenUrl;
            }
        }

        return carrusel;
    }
}
