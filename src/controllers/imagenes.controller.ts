import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ImagenesService } from 'src/services/imagenes.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@ApiTags('imagenes')
@Controller()
export class ImagenesController {
    constructor(private readonly imagenesService: ImagenesService) { }

    @Get("writeFileBase64/:nombreArchivo/:texto")
    @ApiOperation({ summary: 'Escribe texto en formato base64 en un archivo' })
    @ApiParam({ name: 'nombreArchivo', description: 'Nombre del archivo donde se guardará el texto' })
    @ApiParam({ name: 'texto', description: 'Texto en formato base64 para guardar en el archivo' })
    @ApiResponse({ status: 200, description: 'Archivo creado correctamente.' })
    @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
    async writeFileBase64(@Param("nombreArchivo") nombreArchivo: string, @Param("texto") texto: string): Promise<string> {
        const resultado = await this.imagenesService.writeFileBase64(nombreArchivo, texto);
        return resultado;
    }
    //Transforma archivo a base 64
    @Get('imagenes/:nombreArchivo')
    async readFile(@Param('nombreArchivo') nombreArchivo: string, @Res() res: Response) {
        const base64String = await this.imagenesService.readFile(nombreArchivo);
        res.setHeader('Content-Type', 'text/plain');
        res.send(base64String);
    }

    // Base64
    @Post('uploadBase64')
    @ApiBody({ schema: { type: 'object', properties: { nombreArchivo: { type: 'string' }, base64Data: { type: 'string' } } } })
    async uploadBase64(@Body() body): Promise<string> {
        try {
            const { nombreArchivo, base64Data } = body;
            return await this.imagenesService.saveBase64Image(nombreArchivo, base64Data);
        } catch (error) {
            console.error('Error al subir imagen en formato base64:', error);
            throw new Error('Error al procesar la imagen en base64');
        }
    }

    // Binarios
    @Post('uploadFile')
    @UseInterceptors(FileInterceptor('campoArchivo'))
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body: { nombreArchivo: string }): Promise<string> {
        try {
            const nombreArchivo = body.nombreArchivo;
            return await this.imagenesService.saveBinaryImage(nombreArchivo, file.buffer);
        } catch (error) {
            console.error('Error al subir archivo binario:', error);
            throw new Error('Error al procesar el archivo binario');
        }
    }
    //Recuperar ruta de una imagen
    @Get(':idProducto/imagen')
    async obtenerRutaImagen(@Param('idProducto') idProducto: number, @Res() res) {
        try {
            const rutaImagen = await this.imagenesService.obtenerRutaImagenProducto(idProducto);
            res.status(200).json({ rutaImagen });
        } catch (error) {
            res.status(404).json({ mensaje: 'Imagen no encontrada' });
        }
    }
}
