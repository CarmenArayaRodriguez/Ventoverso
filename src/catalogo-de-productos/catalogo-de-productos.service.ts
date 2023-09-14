import { Injectable } from '@nestjs/common';
import { Destacado } from './producto-destacado/entities/destacado.entity';
import { AgregarDestacadoDTO } from './producto-destacado/dto/agregar-destacado.dto';




@Injectable()
export class CatalogoDeProductosService {

    private destacados: Destacado[] = [];
    destacado: any;

    getCatalogoDeProductos(): string {
        return 'Catálogo de productos';
    }


agregarDestacado(agregarDestacadoDTO: AgregarDestacadoDTO) {
        const nuevoDestacado = new Destacado();
        nuevoDestacado.productoId = agregarDestacadoDTO.productoId;
        nuevoDestacado.usuarioId = "User 9999";
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






    

   





