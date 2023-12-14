import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from 'src/entities/marca.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarcaService {
    constructor(
        @InjectRepository(Marca)
        private marcaRepository: Repository<Marca>,
    ) { }

    async obtenerTodasLasMarcas(): Promise<Marca[]> {
        return this.marcaRepository.find();
    }
}