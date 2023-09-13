import { Injectable } from '@nestjs/common';
import { AgregarFavoritoDTO } from './producto-favorito/dto/agregar-favorito.dto';
import { CrearUsuarioDTO } from './gestion-usuario/dto/crear-nuevo-usuario.dto'; // verificar o borrar

import { Favorito } from './producto-favorito/entities/favorito.entity';
import { Usuario } from './gestion-usuario/entities/usuario.entity';
import { EditarUsuarioDTO } from './gestion-usuario/dto/editar-usuario.dto';

@Injectable()
export class PerfilDeUsuarioService {

    private favoritos: Favorito[] = [];
    Usuario: any;

    getPerfilDeUsuario(): string {
        return 'Perfil de usuario';
    }


// Producto Favorito xxxxxxxxxxxxxxx

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


//Gestion de usuario xxxxxxxxxxxxxxxxxxxxxxxxx


    crearUsuario(crearUsuarioDTO: CrearUsuarioDTO) {
        const nuevoUsuario = new Usuario();
        nuevoUsuario.rut = crearUsuarioDTO.rut;
        nuevoUsuario.dv = "5";
        nuevoUsuario.nombre = crearUsuarioDTO.nombre
        nuevoUsuario.apellido = crearUsuarioDTO.apellido
        nuevoUsuario.email = crearUsuarioDTO.email
        nuevoUsuario.password = crearUsuarioDTO.password
        this.Usuario.push(nuevoUsuario);

        return { mensaje: 'Nuevo usuario creado corrcetamente', rut: crearUsuarioDTO.rut ,dv: crearUsuarioDTO.dv };
    }
    
    


        eliminarUsuario(rut: number , dv:number) {
        return { mensaje: `El usuario rut ${rut} ha sido eliminado.` };
    }

    


}


