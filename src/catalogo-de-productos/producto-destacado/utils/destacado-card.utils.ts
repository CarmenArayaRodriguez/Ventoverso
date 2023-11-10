import { DestacadoCardResponseDTO } from "../../../dto/destacado-card-response.dto";
import { DestacadoCard } from "../entities/destacado-card.entity";

export function convierteADestacadoCardResponseDTO(destacadoCard: DestacadoCard): DestacadoCardResponseDTO {
    return {
        id: destacadoCard.id,
        imagenUrl: destacadoCard.imagenUrl,
        estrellas: destacadoCard.estrellas,
        nombre: destacadoCard.nombre,
        precio: destacadoCard.precio,
        linkDetalle: destacadoCard.linkDetalle,
    };
}
