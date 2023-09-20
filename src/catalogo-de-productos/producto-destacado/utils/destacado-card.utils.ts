import { DestacadoCardResponseDTO } from "../dto/destacado-card-response.dto";
import { DestacadoCard } from "../entities/destacado-card.entity";

export function convierteADestacadoCardResponseDTO(destacadoCard: DestacadoCard): DestacadoCardResponseDTO {
    return {
        imagenUrl: destacadoCard.imagenUrl,
        estrellas: destacadoCard.estrellas,
        // rating: destacadoCard.rating,
        nombre: destacadoCard.nombre,
        precio: destacadoCard.precio,
    };
}
