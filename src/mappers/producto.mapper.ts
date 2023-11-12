import { Producto } from "../entities/producto.entity";
import { ProductoDetalleResponseDTO } from "../dto/producto-detalle-response.dto";
import { CrearProductoDTO } from "src/dto/crear-producto.dto";

export class ProductoMapper {

    static toDto(producto: Producto): ProductoDetalleResponseDTO {
        const dto = new ProductoDetalleResponseDTO();
        dto.id = producto.id.toString();
        dto.estrellas = producto.estrellas || 0;
        dto.nombre = producto.nombre;
        dto.marca = producto.marca?.marca;
        dto.modelo = producto.modelo;
        dto.imagenes = producto.imagenes?.map(imagenProducto => imagenProducto.imagen);
        dto.precio = producto.precio;
        dto.caracteristicasPrincipales = producto.caracteristicasPrincipales;
        dto.descripcion = producto.descripcion;
        dto.stock = producto.stock;

        return dto;
    }

    static async toEntity(crearProductoDto: CrearProductoDTO, categoriaRepo, subcategoriaRepo, marcaRepo): Promise<Producto> {
        const producto = new Producto();
        producto.nombre = crearProductoDto.nombre;
        producto.descripcion = crearProductoDto.descripcion;
        producto.precio = crearProductoDto.precio;
        producto.stock = crearProductoDto.stock;
        producto.modelo = crearProductoDto.modelo;
        producto.caracteristicasPrincipales = crearProductoDto.caracteristicasPrincipales;
        producto.estrellas = crearProductoDto.estrellas;

        if (crearProductoDto.id_categoria) {
            producto.categoria = await categoriaRepo.findOne({ where: { id: crearProductoDto.id_categoria } });
            console.log('ID Categoria:', crearProductoDto.id_categoria);
        }
        if (crearProductoDto.id_subcategoria) {
            producto.subcategoria = await subcategoriaRepo.findOne({ where: { id: crearProductoDto.id_subcategoria } });
            console.log('ID Subcategoria:', crearProductoDto.id_subcategoria);
        }
        if (crearProductoDto.id_marcas) {
            producto.marca = await marcaRepo.findOne({ where: { id: crearProductoDto.id_marcas } });
            console.log('ID Marca:', crearProductoDto.id_marcas);
        }


        return producto;
    }

}



