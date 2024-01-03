import { BadRequestException, Injectable } from '@nestjs/common';
import { AgregarFavoritoRequestDTO } from '../dto/agregar-favorito-request.dto';
import { CrearUsuarioDTO } from '../dto/crear-nuevo-usuario.dto';
import { Favorito } from '../perfil-de-usuario/producto-favorito/entities/favorito.entity';
import { Usuario } from '../perfil-de-usuario/gestion-usuario/entities/usuario.entity';
import { IngresarRequestDTO } from '../dto/ingresar-request.dto';
import { IngresarResponseDTO } from '../dto/ingresar-response.dto';
import { EditarUsuarioDTO } from 'src/dto/editar-usuario.dto';

@Injectable()
export class PerfilDeUsuarioService {
    private favoritos: Favorito[] = [];
    private usuarios: Usuario[] = [

    ];

    getPerfilDeUsuario(): string {
        return 'Perfil de usuario';
    }

    // Producto Favorito
    agregarFavorito(agregarFavoritoDTO: AgregarFavoritoRequestDTO): { mensaje: string; productoId: string } {

        return { mensaje: 'Producto añadido a favoritos', productoId: agregarFavoritoDTO.productoId };
    }

    eliminarFavorito(productoId: string): { mensaje: string } {

        return { mensaje: `Producto con ID ${productoId} eliminado de favoritos` };
    }

    // Gestion de usuario
    crearUsuario(crearUsuarioDTO: CrearUsuarioDTO): { mensaje: string; rut: string; dv: string } {
        const nuevoUsuario = new Usuario();
        nuevoUsuario.rut = crearUsuarioDTO.rut;
        nuevoUsuario.dv = crearUsuarioDTO.dv;
        nuevoUsuario.nombre = crearUsuarioDTO.nombre;
        nuevoUsuario.apellido = crearUsuarioDTO.apellido;
        nuevoUsuario.email = crearUsuarioDTO.email;
        nuevoUsuario.password = crearUsuarioDTO.password;
        this.usuarios.push(nuevoUsuario);

        return { mensaje: 'Nuevo usuario creado correctamente', rut: crearUsuarioDTO.rut, dv: crearUsuarioDTO.dv };
    }

    editarUsuario(rut: string, editarUsuarioDto: EditarUsuarioDTO): string {

        return `El usuario rut ${rut} ha sido editado.`;
    }

    eliminarUsuario(rut: string) {

        return { mensaje: `El usuario rut ${rut} ha sido eliminado.` };
    }

    // Ingresar desde el home
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
}

