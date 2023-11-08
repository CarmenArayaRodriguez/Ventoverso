import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AgregarFavoritoRequestDTO } from '../dto/agregar-favorito-request.dto';
import { CrearUsuarioDTO } from '../dto/crear-nuevo-usuario.dto'; // verificar o borrar

import { Favorito } from '../perfil-de-usuario/producto-favorito/entities/favorito.entity';
import { Usuario } from '../perfil-de-usuario/gestion-usuario/entities/usuario.entity';
import { EditarUsuarioDTO } from '../dto/editar-usuario.dto';
import { IngresarRequestDTO } from '../dto/ingresar-request.dto';
import { IngresarResponseDTO } from '../dto/ingresar-response.dto';

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

    // agregarFavorito(agregarFavoritoDTO: AgregarFavoritoRequestDTO) {
    //     const nuevoFavorito = new Favorito();
    //     nuevoFavorito.productoId = agregarFavoritoDTO.productoId;
    //     nuevoFavorito.usuarioId = "usuario123";
    //     nuevoFavorito.fechaAgregado = new Date();

    //     this.favoritos.push(nuevoFavorito);

    //     return { mensaje: 'Producto añadido a favoritos', productoId: agregarFavoritoDTO.productoId };
    // }

    // eliminarFavorito(id: string) {
    //     return { mensaje: `Producto con ID ${id} eliminado de favoritos` };
    // }

    // obtenerTodosFavoritos(): Favorito[] {
    //     return this.favoritos;
    // }


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

    // ingresar(ingresarDTO: IngresarRequestDTO) {
    //     const usuarioEncontrado = this.usuarios.find(usuario => usuario.email === ingresarDTO.email && usuario.password === ingresarDTO.password);

    //     if (usuarioEncontrado) {
    //         throw new HttpException({ mensaje: 'Usuario ingresado con éxito' }, HttpStatus.OK);
    //     } else {
    //         throw new BadRequestException('Credenciales incorrectas');
    //     }
    // }

    ingresar(ingresarDTO: IngresarRequestDTO): IngresarResponseDTO {
        const usuarioEncontrado = this.usuarios.find(usuario => usuario.email === ingresarDTO.email && usuario.password === ingresarDTO.password);

        if (usuarioEncontrado) {
            return {
                ingresoExitoso: true,
                mensaje: 'Usuario ingresado con éxito'
            };
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


