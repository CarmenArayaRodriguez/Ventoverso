import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comuna } from 'src/entities/comuna.entity';

@Injectable()
export class ComunaService {
    private readonly logger = new Logger(ComunaService.name);

    constructor(
        @InjectRepository(Comuna)
        private comunaRepository: Repository<Comuna>,
    ) { }

    async obtenerTodasLasComunas(): Promise<Comuna[]> {
        this.logger.log('Obteniendo todas las comunas');
        try {
            const comunas = await this.comunaRepository.find();
            this.logger.debug(`Se encontraron ${comunas.length} comunas`);
            return comunas;
        } catch (error) {
            this.logger.error(`Error obteniendo comunas: ${error.message}`, error.stack);
            throw error;
        }
    }
}
