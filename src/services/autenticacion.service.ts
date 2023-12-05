import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutenticacionService {
    constructor(
        @InjectRepository(Cliente)
        private clientesRepository: Repository<Cliente>,
        private jwtService: JwtService,
    ) { }

    async validarUsuario(email: string, password: string): Promise<string> {
        const usuario = await this.clientesRepository.findOne({ where: { email } });

        if (!usuario) {
            throw new UnauthorizedException("Usuario no encontrado");
        }

        if (usuario.password !== password) {
            throw new UnauthorizedException("Clave incorrecta");
        }


        const payload = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.email
        };

        return this.jwtService.signAsync(payload);
    }
}
