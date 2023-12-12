import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/entities/cliente.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AutenticacionService {
    constructor(
        @InjectRepository(Cliente)
        private clientesRepository: Repository<Cliente>,
        private jwtService: JwtService,
    ) { }

    // async validarUsuario(email: string, password: string): Promise<string> {
    //     const usuario = await this.clientesRepository.findOne({ where: { email } });

    //     if (!usuario) {
    //         throw new UnauthorizedException("Usuario no encontrado");
    //     }

    //     if (usuario.password !== password) {
    //         throw new UnauthorizedException("Clave incorrecta");
    //     }

    async registrarUsuario(datosRegistro): Promise<Cliente> {
        const usuarioNuevo = new Cliente();

        // usuarioNuevo.password = await bcrypt.hash(datosRegistro.password, 10);

        // const usuarioGuardado = await this.clientesRepository.save(usuarioNuevo);

        usuarioNuevo.rut_cliente = datosRegistro.rut_cliente;
        usuarioNuevo.dv_cliente = datosRegistro.dv_cliente;
        usuarioNuevo.nombre = datosRegistro.nombre;
        usuarioNuevo.apellido = datosRegistro.apellido;
        usuarioNuevo.email = datosRegistro.email;
        usuarioNuevo.direccion = datosRegistro.direccion;
        usuarioNuevo.ciudad = datosRegistro.ciudad;
        usuarioNuevo.comuna = datosRegistro.comuna;
        usuarioNuevo.region = datosRegistro.region;
        usuarioNuevo.telefono = datosRegistro.telefono;

        usuarioNuevo.password = await bcrypt.hash(datosRegistro.password, 10);

        usuarioNuevo.roles = ['USUARIO'];

        const usuarioGuardado = await this.clientesRepository.save(usuarioNuevo);
        return usuarioGuardado;
    }

    async validarUsuario(email: string, password: string): Promise<string> {
        const usuario = await this.clientesRepository.findOne({ where: { email } });

        if (!usuario) {
            throw new UnauthorizedException("Usuario no encontrado");
        }

        const contraseñaCorrecta = await bcrypt.compare(password, usuario.password);
        if (!contraseñaCorrecta) {
            throw new UnauthorizedException("Clave incorrecta");
        }

        const payload = {
            rutCliente: usuario.rut_cliente,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.email,
            roles: usuario.roles,
        };

        return this.jwtService.signAsync(payload);
    }

    async actualizarRolesUsuario(rut_cliente: string, nuevosRoles: string[]): Promise<Cliente> {
        const usuario = await this.clientesRepository.findOne({ where: { rut_cliente } });
        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }
        usuario.roles = nuevosRoles;
        return this.clientesRepository.save(usuario);
    }

}
