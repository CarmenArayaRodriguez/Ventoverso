import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Blog y noticias')
@Controller('blog-y-noticias')
export class BlogYNoticiasController {
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })
    @ApiResponse({ status: 200, description: 'Blog y noticias' })

    getBlogYNoticias(): string {
        return 'Blog y noticias';
    }
}
