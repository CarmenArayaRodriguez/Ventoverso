import { Injectable } from '@nestjs/common';
import { AgregarFavoritoDTO } from './producto-favorito/dto/agregar-favorito.dto';
import { Favorito } from './producto-favorito/entities/favorito.entity';

@Injectable()
export class PerfilDeUsuarioService {

    private favoritos: Favorito[] = [];

    getPerfilDeUsuario(): string {
        return 'Perfil de usuario';
    }


    agregarFavorito(agregarFavoritoDTO: AgregarFavoritoDTO) {
        const nuevoFavorito = new Favorito();
        nuevoFavorito.productoId = agregarFavoritoDTO.productoId;
        nuevoFavorito.usuarioId = "usuario123";
        nuevoFavorito.fechaAgregado = new Date();

        this.favoritos.push(nuevoFavorito);

        return { mensaje: 'Producto añadido a favoritos', productoId: agregarFavoritoDTO.productoId };
    }

    eliminarFavorito(id: string) {
        return { mensaje: `Producto con ID ${id} eliminado de favoritos` };
    }

    obtenerTodosFavoritos(): Favorito[] {
        return this.favoritos;
    }
}
