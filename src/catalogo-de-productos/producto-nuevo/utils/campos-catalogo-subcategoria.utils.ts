export function transformaACatalogoSubcategoriaResponseDto(producto) {
    return {
        id: producto.id,
        imagenes: [producto.imagenes[0]],
        estrellas: producto.estrellas,
        nombre: producto.nombre,
        precio: producto.precio,
        linkDetalle: producto.linkDetalle
    };
}
