import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from 'src/entities/ciudad.entity';

@Injectable()
export class CiudadService {
    private readonly logger = new Logger(CiudadService.name);

    constructor(
        @InjectRepository(Ciudad)
        private ciudadRepository: Repository<Ciudad>,
    ) { }

    async obtenerTodasLasCiudades(): Promise<Ciudad[]> {
        this.logger.log('Obteniendo todas las ciudades');
        try {
            const ciudades = await this.ciudadRepository.find();
            this.logger.debug(`Se encontraron ${ciudades.length} ciudades`);
            return ciudades;
        } catch (error) {
            this.logger.error(`Error obteniendo ciudades: ${error.message}`, error.stack);
            throw error;
        }
    }
}
