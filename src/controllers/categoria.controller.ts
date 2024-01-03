import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
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
        try {
            const categorias = await this.categoriaService.obtenerTodasLasCategorias();
            if (!categorias || categorias.length === 0) {
                throw new HttpException('No se encontraron categorías', HttpStatus.NOT_FOUND);
            }
            return categorias;
        } catch (error) {
            throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
