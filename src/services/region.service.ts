import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from 'src/entities/region.entity';

@Injectable()
export class RegionesService {
    private readonly logger = new Logger(RegionesService.name);

    constructor(
        @InjectRepository(Region)
        private regionesRepository: Repository<Region>,
    ) { }

    async obtenerTodasLasRegiones(): Promise<Region[]> {
        this.logger.log('Obteniendo todas las regiones');
        try {
            const regiones = await this.regionesRepository.find();
            this.logger.debug(`Se encontraron ${regiones.length} regiones`);
            return regiones;
        } catch (error) {
            this.logger.error(`Error obteniendo regiones: ${error.message}`, error.stack);
            throw error;
        }
    }
}
