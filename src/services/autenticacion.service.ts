import { Injectable, NotFoundException, UnauthorizedException, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/entities/cliente.entity';
import { Repository } from 'typeorm';
import { CrearUsuarioDTO } from 'src/dto/crear-nuevo-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AutenticacionService {
    private readonly logger = new Logger(AutenticacionService.name);

    constructor(
        @InjectRepository(Cliente)
        private clientesRepository: Repository<Cliente>,
        private jwtService: JwtService,
    ) { }


    async registrarUsuario(datosRegistro: CrearUsuarioDTO): Promise<Cliente> {
        this.logger.debug('Registrando un nuevo usuario');
        // Crear una nueva instancia de Cliente con los datos proporcionados.
        const usuarioNuevo = new Cliente();
        // Asignar valores a las propiedades del cliente.
        usuarioNuevo.rut_cliente = datosRegistro.rut;
        usuarioNuevo.dv_cliente = datosRegistro.dv;
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
        try {
            const usuarioGuardado = await this.clientesRepository.save(usuarioNuevo);
            this.logger.log('Usuario registrado exitosamente');
            return usuarioGuardado;
        } catch (error) {
            this.logger.error('Error al registrar usuario', error.stack);
            throw new HttpException('Error al registrar usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    // Validar un usuario al intentar iniciar sesión
    async validarUsuario(email: string, password: string): Promise<string> {
        this.logger.debug(`Validando usuario con email: ${email}`);
        try {
            // Buscar el usuario por correo electrónico.
            const usuario = await this.clientesRepository.findOne({ where: { email } });
            // Si no se encuentra el usuario, lanzar una excepción.
            if (!usuario) {
                throw new UnauthorizedException('Usuario no encontrado');
            }
            // Comparar la contraseña proporcionada con la almacenada usando bcrypt.
            const esContraseñaCorrecta = await bcrypt.compare(password, usuario.password);
            if (!esContraseñaCorrecta) {
                throw new UnauthorizedException('Clave incorrecta');
            }
            // Crear el payload para el token JWT con información relevante del usuario.
            const payload = {
                idCliente: usuario.rut_cliente,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                correo: usuario.email,
                roles: usuario.roles,
            };
            // Generar y retornar el token JWT firmado.
            const secret = process.env.JWT_SECRET;
            const jwt = await this.jwtService.signAsync(payload, { secret });
            this.logger.log('Usuario validado exitosamente');
            return jwt;
        } catch (error) {
            // Registrar y lanzar un error en caso de problemas en la validación.
            this.logger.error('Error al validar usuario', error.stack);
            throw new HttpException('Error al validar usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
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

    async actualizarUsuario(rut_cliente: string, datosActualizados): Promise<Cliente> {
        // Registrar en el log el inicio del proceso de actualización.
        this.logger.debug(`Actualizando usuario con RUT: ${rut_cliente}`);
        try {
            // Buscar el usuario por su RUT en la base de datos.
            const usuario = await this.clientesRepository.findOne({ where: { rut_cliente } });
            if (!usuario) {
                // Si no se encuentra el usuario, lanzar una excepción.
                throw new NotFoundException('Usuario no encontrado');
            }
            // Verifica si se proporcionó una nueva contraseña en los datos actualizados.
            if (datosActualizados.password) {
                // Si se proporciona una nueva contraseña, hashearla antes de asignarla.
                datosActualizados.password = await bcrypt.hash(datosActualizados.password, 10);
            }

            // Actualizar las propiedades del usuario con los datos recibidos.
            Object.assign(usuario, datosActualizados);

            // Guardar el usuario actualizado en la base de datos.
            await this.clientesRepository.save(usuario);
            // Registrar en el log el éxito de la operación.
            this.logger.log('Usuario actualizado exitosamente');
            // Registrar en el log el éxito de la operación.
            return usuario;
        } catch (error) {
            // En caso de error durante el proceso, registrar el error en el log.
            this.logger.error('Error al actualizar usuario', error.stack);

            throw new HttpException('Error al actualizar usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async eliminarUsuario(rut_cliente: string): Promise<void> {
        this.logger.debug(`Eliminando usuario con RUT: ${rut_cliente}`);
        try {
            const resultado = await this.clientesRepository.delete(rut_cliente);
            if (resultado.affected === 0) {
                throw new NotFoundException('Usuario no encontrado');
            }
            this.logger.log('Usuario eliminado exitosamente');
        } catch (error) {
            this.logger.error('Error al eliminar usuario', error.stack);
            throw new HttpException('Error al eliminar usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async obtenerUsuarioPorRut(rut_cliente: string): Promise<Cliente> {
        this.logger.debug(`Obteniendo usuario con RUT: ${rut_cliente}`);
        try {
            const usuario = await this.clientesRepository.findOne({ where: { rut_cliente } });
            if (!usuario) {
                throw new NotFoundException('Usuario no encontrado');
            }
            this.logger.log('Usuario obtenido exitosamente');
            return usuario;
        } catch (error) {
            this.logger.error('Error al obtener usuario', error.stack);
            throw new HttpException('Error al obtener usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async obtenerTodosLosUsuarios(): Promise<Cliente[]> {
        this.logger.debug('Obteniendo todos los usuarios');
        try {
            const usuarios = await this.clientesRepository.find();
            this.logger.log('Usuarios obtenidos exitosamente');
            return usuarios;
        } catch (error) {
            this.logger.error('Error al obtener usuarios', error.stack);
            throw new HttpException('Error al obtener usuarios', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
