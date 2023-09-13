import { Injectable } from '@nestjs/common';
import { Destacado } from './producto-destacado/entities/destacado.entity';
import { AgregarDestacadoDTO } from './producto-destacado/dto/agregar-producto-destacado.dto';
import { CatalogoDeProductosController } from './catalogo-de-productos.controller';

@Injectable()

   


export class CatalogoDeProductosService {

    private destacado: Destacado[] = [];
    Usuario: any;
    getCatalogoDeProductos(): string {
        return 'Catálogo de productos';
    }

    agregarDestacado(agregarDestacadoDTO: AgregarDestacadoDTO) {
        const nuevoDestacado = new Destacado();
        nuevoDestacado.productoId = agregarDestacadoDTO.productoId;
        nuevoDestacado.usuarioId = "usuario123";
        nuevoDestacado.fechaDestacado = new Date();

        this.destacado.push(nuevoDestacado);

        return { mensaje: 'Producto añadido a destacados', productoId: agregarDestacadoDTO.productoId };
    }

    eliminarDestacado(id: string) {
        return { mensaje: `Producto con ID ${id} eliminado de producto destacado`};
    }

    obtenerTodosDestacado(): Destacado[] {
        return this.destacado;
    }







}
