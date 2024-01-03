import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors, Logger, NotFoundException, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { ImagenesService } from 'src/services/imagenes.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@ApiTags('imagenes')
@Controller('imagenes')
export class ImagenesController {
    private readonly logger = new Logger(ImagenesController.name);

    constructor(private readonly imagenesService: ImagenesService) { }

    @Get("writeFileBase64/:nombreArchivo/:texto")
    @ApiOperation({ summary: 'Escribe texto en formato base64 en un archivo' })
    @ApiParam({ name: 'nombreArchivo', description: 'Nombre del archivo donde se guardará el texto' })
    @ApiParam({ name: 'texto', description: 'Texto en formato base64 para guardar en el archivo' })
    @ApiResponse({ status: 200, description: 'Archivo creado correctamente.' })
    @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
    async escribirArchivoBase64(@Param("nombreArchivo") nombreArchivo: string, @Param("texto") texto: string): Promise<string> {
        try {
            const resultado = await this.imagenesService.escribirArchivoBase64(nombreArchivo, texto);
            return resultado;
        } catch (error) {
            this.logger.error('Error al escribir en archivo base64:', error);
            throw new HttpException('Error interno del servidor al escribir en archivo base64', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/obtener/:nombreArchivo')
    @ApiOperation({ summary: 'Obtiene una imagen codificada en base64' })
    @ApiResponse({ status: 200, description: 'Imagen obtenida correctamente en formato base64.' })
    async leerArchivo(@Param('nombreArchivo') nombreArchivo: string, @Res() res: Response) {
        try {
            const cadenaBase64 = await this.imagenesService.leerArchivo(nombreArchivo);
            res.setHeader('Content-Type', 'text/plain');
            res.send(cadenaBase64);
        } catch (error) {
            this.logger.error('Error al leer archivo:', error);
            throw new NotFoundException('Archivo no encontrado o error al leerlo');
        }
    }

    // Base64
    @Post('uploadBase64')
    @ApiOperation({ summary: 'Sube una imagen en formato base64' })
    @ApiResponse({ status: 200, description: 'Imagen subida correctamente en formato base64.' })
    @ApiBody({ schema: { type: 'object', properties: { nombreArchivo: { type: 'string' }, datosBase64: { type: 'string' } } } })
    async subirBase64(@Body() body): Promise<string> {
        try {
            const { nombreArchivo, datosBase64 } = body;
            return await this.imagenesService.guardarImagenBase64(nombreArchivo, datosBase64);
        } catch (error) {
            this.logger.error('Error al subir imagen en formato base64:', error);
            throw new BadRequestException('Error al procesar la imagen en base64');
        }
    }

    // Binarios
    @Post('uploadFile')
    @ApiOperation({ summary: 'Sube un archivo binario' })
    @ApiResponse({ status: 200, description: 'Archivo binario subido correctamente.' })
    @UseInterceptors(FileInterceptor('campoArchivo'))
    async subirArchivo(@UploadedFile() archivo: Express.Multer.File, @Body() body: { nombreArchivo: string }): Promise<string> {
        try {
            const nombreArchivo = body.nombreArchivo;
            return await this.imagenesService.guardarImagenBinaria(nombreArchivo, archivo.buffer);
        } catch (error) {
            this.logger.error('Error al subir archivo binario:', error);
            throw new BadRequestException('Error al procesar el archivo binario');
        }
    }

    @Get(':idProducto/imagen')
    @ApiOperation({ summary: 'Obtiene la ruta de una imagen de un producto' })
    @ApiResponse({ status: 200, description: 'Ruta de imagen de producto obtenida correctamente.' })
    @ApiResponse({ status: 404, description: 'Imagen del producto no encontrada.' })
    async obtenerRutaImagen(@Param('idProducto') idProducto: number, @Res() res: Response) {
        try {
            const rutaImagen = await this.imagenesService.obtenerRutaImagenProducto(idProducto);
            res.status(200).json({ rutaImagen });
        } catch (error) {
            this.logger.error('Error al obtener ruta de la imagen:', error);
            throw new NotFoundException('Imagen del producto no encontrada');
        }
    }
}
