import { Producto } from "src/entities/producto.entity";
import { ProductoCatalogoSubcategoriaResponseDTO } from "src/dto/producto-catalogo-subcategoria.dto";

export class CatalogoSubcategoriaMapper {
    static toDto(producto: Producto): ProductoCatalogoSubcategoriaResponseDTO {
        if (!producto) {
            return null;
        }

        return {
            id: producto.id,
            imagenUrl: producto.imagenes && producto.imagenes.length > 0 ? producto.imagenes[0].imagen : '',
            estrellas: producto.estrellas || 0,
            nombre: producto.nombre || '',
            precio: producto.precio || 0,
        };
    }
}
