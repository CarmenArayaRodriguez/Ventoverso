export function transformaACatalogoSubcategoriaResponseDto(producto) {
    return {
        id: producto.id,
        imagenUrl: producto.imagenes.length > 0 ? producto.imagenes[0] : '',
        estrellas: producto.estrellas,
        nombre: producto.nombre,
        precio: producto.precio,
    };
}
