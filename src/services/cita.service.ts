import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from 'src/entities/cita.entity';
import { CitaDTO } from 'src/dto/cita.dto';
import { Cliente } from 'src/entities/cliente.entity';
import { CitaResponseDTO } from 'src/dto/cita-response.dto';

@Injectable()
export class CitaService {
    private readonly logger = new Logger(CitaService.name);

    constructor(
        @InjectRepository(Cita)
        private citaRepository: Repository<Cita>,
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>,
    ) { }

    async obtenerTodasLasCitas(): Promise<Cita[]> {
        return await this.citaRepository.find();
    }

    async obtenerCitasDeUsuario(email: string): Promise<Cita[]> {
        return await this.citaRepository.find({ where: { email } });
    }

    async crearCita(data: CitaDTO): Promise<CitaResponseDTO> {
        this.logger.log('Creando una nueva cita');
        const cliente = await this.clienteRepository.findOne({
            where: { email: data.email },
        });

        if (!cliente) {
            this.logger.error(`Cliente no encontrado con el email: ${data.email}`);
            throw new NotFoundException('Cliente no encontrado con el email proporcionado');
        }

        const cita = this.citaRepository.create({
            ...data,
        });

        await this.citaRepository.save(cita);
        this.logger.debug('Cita creada con éxito');
        return {
            id: cita.id,
            nombre: cita.nombre,
            rut: data.rut,
            email: cita.email,
            fecha: cita.fecha,
            telefono: cita.telefono,
            instrumentos: cita.instrumentos,
        };
    }

    async actualizarCita(id: number, data: Partial<CitaDTO>): Promise<Cita> {
        this.logger.log(`Intentando actualizar la cita con ID: ${id}`);
        const cita = await this.citaRepository.findOne({ where: { id } });
        if (!cita) {
            this.logger.log(`Intentando actualizar la cita con ID: ${id}`);
            throw new NotFoundException('La cita no existe');
        }

        cita.nombre = data.nombre;
        cita.email = data.email;
        cita.rut = data.rut;
        cita.telefono = data.telefono;
        cita.instrumentos = data.instrumentos;
        cita.fecha = data.fecha;

        await this.citaRepository.save(cita);
        this.logger.log(`Intentando actualizar la cita con ID: ${id}`);
        return cita;
    }

    async eliminarCita(id: number): Promise<void> {
        const result = await this.citaRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('La cita no existe');
        }
    }
}