import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subcategoria } from '../entities/subcategoria.entity';
import { SubcategoriaDTO } from 'src/dto/subcategoria.dto';

@Injectable()
export class SubcategoriaService {
    constructor(
        @InjectRepository(Subcategoria)
        private readonly subcategoriaRepository: Repository<Subcategoria>,
    ) { }

    async obtenerTodasSubcategorias(): Promise<SubcategoriaDTO[]> {
        const subcategorias = await this.subcategoriaRepository.find();
        return subcategorias.map(subcategoria => {
            return {
                id: subcategoria.id,
                nombre: subcategoria.nombre,
                descripcion: subcategoria.descripcion,
                imagenUrl: subcategoria.imagen
            };
        });
    }
}

