import { Controller, Get, NotFoundException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SubcategoriaService } from '../services/subcategoria.service';
import { SubcategoriaDTO } from 'src/dto/subcategoria.dto';
import { Subcategoria } from 'src/entities/subcategoria.entity';

@ApiTags('Subcategorias')
@Controller('subcategorias')
export class SubcategoriaController {
    constructor(private readonly subcategoriaService: SubcategoriaService) { }

    @Get('subcategorias')
    @ApiOperation({ summary: 'Obtener todas las subcategorías' })
    @ApiResponse({ status: 200, description: 'Lista de subcategorías', type: [SubcategoriaDTO] })
    @ApiResponse({ status: 404, description: 'Subcategorías no encontradas' })
    async obtenerTodasSubcategorias(): Promise<SubcategoriaDTO[]> {
        const subcategorias = await this.subcategoriaService.obtenerTodasSubcategorias();
        if (subcategorias.length === 0) {
            throw new NotFoundException('Subcategorías no encontradas');
        }
        return subcategorias;
    }
}
