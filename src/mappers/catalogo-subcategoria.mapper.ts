import { Producto } from "src/entities/producto.entity";
import { ProductoCatalogoSubcategoriaResponseDTO } from "src/dto/producto-catalogo-subcategoria.dto";

export class CatalogoSubcategoriaMapper {
    static toDto(producto: Producto): ProductoCatalogoSubcategoriaResponseDTO {
        if (!producto) {
            return null;
        }

        const imagenes = producto.imagenes ? producto.imagenes.map(imagen => imagen.url) : [];

        return {
            id: producto.id.toString() || '',
            imagenes: imagenes,
            estrellas: producto.estrellas || 0,
            nombre: producto.nombre || '',
            precio: producto.precio || 0,
        };
    }
}
