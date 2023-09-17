import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AgregarFavoritoDTO } from './producto-favorito/dto/agregar-favorito.dto';
import { CrearUsuarioDTO } from './gestion-usuario/dto/crear-nuevo-usuario.dto'; // verificar o borrar

import { Favorito } from './producto-favorito/entities/favorito.entity';
import { Usuario } from './gestion-usuario/entities/usuario.entity';
import { EditarUsuarioDTO } from './gestion-usuario/dto/editar-usuario.dto';
import { IngresarDTO } from './ingresar/dto/ingresar.dto';

@Injectable()
export class PerfilDeUsuarioService {

    private favoritos: Favorito[] = [];

    private usuarios: Usuario[] = [
        {
            email: "ejemplo@correo.com",
            password: "tuContraseña",
            rut: "12345678-4",
            nombre: "Ejemplo",
            apellido: "Apellido",
            dv: "9"
        }

    ];
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
        this.usuarios.push(nuevoUsuario);

        return { mensaje: 'Nuevo usuario creado corrcetamente', rut: crearUsuarioDTO.rut, dv: crearUsuarioDTO.dv };
    }




    eliminarUsuario(rut: number, dv: number) {
        return { mensaje: `El usuario rut ${rut} ha sido eliminado.` };
    }


    //Ingresar desde el home

    ingresar(ingresarDTO: IngresarDTO) {
        const usuarioEncontrado = this.usuarios.find(usuario => usuario.email === ingresarDTO.email && usuario.password === ingresarDTO.password);

        if (usuarioEncontrado) {
            throw new HttpException({ mensaje: 'Usuario ingresado con éxito' }, HttpStatus.OK);
        } else {
            throw new BadRequestException('Credenciales incorrectas');
        }
    }
    //Puede ser útil si decidimos que un usuario pueda registrarse solo con mail y contraseña
    // crearUsuarioSimple(email: string, password: string) {
    //     const nuevoUsuario = new Usuario();
    //     nuevoUsuario.email = email;
    //     nuevoUsuario.password = password;
    //     this.usuarios.push(nuevoUsuario);
    // }

}


