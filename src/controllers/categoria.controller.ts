import { Controller, Get } from '@nestjs/common';
import { CategoriaService } from 'src/services/categoria.service';
import { Categoria } from 'src/entities/categoria.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('categorias')
@Controller('categorias')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las categorías' })
    @ApiResponse({ status: 200, description: 'Retorna todas las categorías.' })
    async obtenerTodasLasCategorias(): Promise<Categoria[]> {
        return this.categoriaService.obtenerTodasLasCategorias();
    }
}