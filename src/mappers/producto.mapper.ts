import { Producto } from "../entities/producto.entity";
import { ProductoDetalleResponseDTO } from "../dto/producto-detalle-response.dto";

export class ProductoMapper {

    static toDto(producto: Producto): ProductoDetalleResponseDTO {
        const dto = new ProductoDetalleResponseDTO();
        dto.id = producto.id.toString();
        dto.nombre = producto.nombre;
        dto.marca = producto.marca?.marca;
        dto.imagenes = producto.imagenes?.map(imagen => imagen.url);
        dto.precio = producto.precio;
        dto.descripcion = producto.descripcion;

        return dto;
    }


}
