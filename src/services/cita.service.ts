import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from 'src/entities/cita.entity';
import { CitaDTO } from 'src/dto/cita.dto';
import { Cliente } from 'src/entities/cliente.entity';

@Injectable()
export class CitaService {
    constructor(
        @InjectRepository(Cita)
        private citaRepository: Repository<Cita>,
        @InjectRepository(Cliente) // Inyecta el repositorio de Cliente
        private clienteRepository: Repository<Cliente>,
    ) { }

    async obtenerTodasLasCitas(): Promise<Cita[]> {
        return await this.citaRepository.find();
    }

    async obtenerCitasDeUsuario(email: string): Promise<Cita[]> {
        return await this.citaRepository.find({ where: { email } });
    }

    // async crearCita(data: CitaDTO): Promise<Cita> {
    //     const cita = this.citaRepository.create(data);
    //     await this.citaRepository.save(cita);
    //     return cita;
    // }

    async crearCita(data: CitaDTO): Promise<Cita> {
        // Primero busca el cliente basado en el email proporcionado
        const cliente = await this.clienteRepository.findOne({
            where: { email: data.email },
        });

        // Si no se encuentra el cliente, lanza una excepción o maneja el error como prefieras
        if (!cliente) {
            throw new NotFoundException('Cliente no encontrado con el email proporcionado');
        }

        // Crea la cita con el Rut del cliente
        const cita = this.citaRepository.create({
            ...data, // los demás datos de la cita
            // cliente, // asigna el Rut del cliente
        });

        // Guarda la cita en la base de datos
        await this.citaRepository.save(cita);
        return cita;
    }

    async actualizarCita(id: number, data: Partial<CitaDTO>): Promise<Cita> {
        const cita = await this.citaRepository.findOne({ where: { id } });
        if (!cita) {
            throw new NotFoundException('La cita no existe');
        }
        await this.citaRepository.update(id, data);
        return this.citaRepository.findOne({ where: { id } });
    }

    async eliminarCita(id: number): Promise<void> {
        const result = await this.citaRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('La cita no existe');
        }
    }
}