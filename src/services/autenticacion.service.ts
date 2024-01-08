import { Injectable, NotFoundException, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/entities/cliente.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AutenticacionService {
    private readonly logger = new Logger(AutenticacionService.name);

    constructor(
        @InjectRepository(Cliente)
        private clientesRepository: Repository<Cliente>,
        private jwtService: JwtService,
    ) { }


    async registrarUsuario(datosRegistro): Promise<Cliente> {
        // Crear una nueva instancia de Cliente con los datos proporcionados.
        const usuarioNuevo = new Cliente();
        // Asignar valores a las propiedades del cliente.
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

        // Encriptar la contraseña del usuario utilizando bcrypt.
        usuarioNuevo.password = await bcrypt.hash(datosRegistro.password, 10);

        // Asignar un rol por defecto al usuario.
        usuarioNuevo.roles = ['USUARIO'];

        // Guardar el nuevo usuario en la base de datos y retornar la entidad guardada.
        const usuarioGuardado = await this.clientesRepository.save(usuarioNuevo);
        return usuarioGuardado;
    }

    async validarUsuario(email: string, password: string): Promise<string> {
        this.logger.debug('validarUsuario llamado con email:', email);
        // Buscar el usuario por correo electrónico.
        const usuario = await this.clientesRepository.findOne({ where: { email } });

        // Si no se encuentra el usuario, se lanza una excepción.
        if (!usuario) {
            throw new UnauthorizedException("Usuario no encontrado");
        }

        // Comparar la contraseña proporcionada con la almacenada usando bcrypt.
        const contraseñaCorrecta = await bcrypt.compare(password, usuario.password);
        if (!contraseñaCorrecta) {
            throw new UnauthorizedException("Clave incorrecta");
        }

        const rutCompleto = `${usuario.rut_cliente}-${usuario.dv_cliente}`;

        // Crear el payload para el token JWT con información relevante del usuario.
        const payload = {
            idCliente: usuario.rut_cliente,
            rutCompleto: rutCompleto,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.email,
            roles: usuario.roles,
        };
        const secret = process.env.JWT_SECRET;
        this.logger.debug('Payload a firmar:', payload);
        // Generar y retornar el token JWT firmado.
        return this.jwtService.signAsync(payload, { secret });
    } catch(error) {
        this.logger.error('Error en validarUsuario:', error);
        throw error;
    }

    async actualizarRolesUsuario(rut_cliente: string, nuevosRoles: string[]): Promise<Cliente> {
        // Buscar el usuario por su RUT.
        const usuario = await this.clientesRepository.findOne({ where: { rut_cliente } });
        // Si no se encuentra el usuario, se lanza una excepción de no encontrado.
        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }
        usuario.roles = nuevosRoles;
        return this.clientesRepository.save(usuario);
    }

}
