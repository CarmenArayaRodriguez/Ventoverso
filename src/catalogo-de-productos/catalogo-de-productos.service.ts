import { Injectable } from '@nestjs/common';
import { Destacado } from './producto-destacado/entities/destacado.entity';
import { AgregarDestacadoDTO } from './producto-destacado/dto/agregar-destacado.dto';
import { CarouselItem } from './carrusel/entities/carrusel-item.entity';




@Injectable()
export class CatalogoDeProductosService {

    private destacados: Destacado[] = [];


    private carrusel: CarouselItem[] = [];

    getCatalogoDeProductos(): string {
        return 'Catálogo de productos';
    }

    agregarDestacado(agregarDestacadoDTO: AgregarDestacadoDTO) {
        const nuevoDestacado = new Destacado();
        nuevoDestacado.productoId = agregarDestacadoDTO.productoId;
        nuevoDestacado.usuarioId = "User 9999";
        nuevoDestacado.fechaDestacado = new Date();

        this.destacados.push(nuevoDestacado);

        return { mensaje: 'Producto añadido a destacados', productoId: agregarDestacadoDTO.productoId };
    }

    eliminarDestacado(id: string) {
        return { mensaje: `Producto con ID ${id} eliminado de producto destacado` };
    }

    obtenerDestacados(): Destacado[] {
        return this.destacados;
    }

    obtenerItemsCarrusel(): CarouselItem[] {
        return this.carrusel;
    }



}














