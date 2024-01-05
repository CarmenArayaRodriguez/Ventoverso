import { Injectable } from '@nestjs/common';
import { Destacado } from 'src/catalogo-de-productos/producto-destacado/entities/destacado.entity';
import { AgregarDestacadoDTO } from 'src/dto/agregar-destacado.dto';
import { CarruselItem } from 'src/catalogo-de-productos/carrusel/entities/carrusel-item.entity';
import { ProductoNuevo } from 'src/catalogo-de-productos/producto-nuevo/entities/producto-nuevo.entity';
import { CategoriaClarinete } from 'src/catalogo-de-productos/clarinetes/entities/categoria-clarinete.entity';
import { CarruselItemTipo } from 'src/catalogo-de-productos/carrusel/enums/carrusel-item-tipo.enum';


@Injectable()
export class CatalogoDeProductosService {

    private destacados: Destacado[] = [];
    private carrusel: CarruselItem[] = [];
    private categoriasClarinete: CategoriaClarinete[] = [];


    private productos: ProductoNuevo[] = [];

    getCatalogoDeProductos(): string {
        return 'Catálogo de productos';
    }

    agregarDestacado(agregarDestacadoDTO: AgregarDestacadoDTO) {
        const nuevoDestacado = new Destacado();
        nuevoDestacado.productoId = agregarDestacadoDTO.productoId;
        nuevoDestacado.usuarioId = 1234;
        nuevoDestacado.fechaDestacado = new Date();

        this.destacados.push(nuevoDestacado);

        return { mensaje: 'Producto añadido a destacados', productoId: agregarDestacadoDTO.productoId };
    }

    eliminarDestacado(id: number) {
        return { mensaje: `Producto con ID ${id} eliminado de producto destacado` };
    }

    obtenerDestacados(): Destacado[] {
        return this.destacados;
    }

    obtenerItemsCarrusel(tipo: CarruselItemTipo): CarruselItem[] {
        return this.carrusel;
    }

    obtenerCategoriasClarinete(): CategoriaClarinete[] {
        return this.categoriasClarinete;
    }


}