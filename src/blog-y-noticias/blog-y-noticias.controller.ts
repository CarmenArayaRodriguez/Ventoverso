import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Blog y noticias')
@Controller('blog-y-noticias')
export class BlogYNoticiasController {
    @Get()
    @ApiOperation({ summary: 'Obtener el nombre del módulo' })

    @ApiResponse({ status: 200, description: 'La solicitud se ha procesado con éxito y la información solicitada se encuentra en la respuesta.' })
    @ApiResponse({ status: 400, description: 'Solicitud incorrecta. Los parámetros proporcionados pueden estar mal formados o faltar.' })
    @ApiResponse({ status: 404, description: 'El recurso solicitado no se encontró.' })
    @ApiResponse({ status: 500, description: 'Error interno del servidor. Algo salió mal en el servidor al procesar la solicitud.' })

    getBlogYNoticias(): string {
        return 'Blog y noticias';
    }
}
