import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from 'src/entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ) { }

    async obtenerTodasLasCategorias(): Promise<Categoria[]> {
        return this.categoriaRepository.find({ relations: ['subcategorias'] });
    }
}
