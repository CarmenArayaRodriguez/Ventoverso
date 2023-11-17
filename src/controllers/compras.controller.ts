// import { Body, Controller, Post, HttpStatus, HttpException } from '@nestjs/common';
// import { ApiTags, ApiResponse } from '@nestjs/swagger';
// import { ComprasService } from 'src/services/compras.service';
// import { Compra } from 'src/entities/compra.entity';

// @ApiTags('compras')
// @Controller('compras')
// export class ComprasController {
//     constructor(private readonly comprasService: ComprasService) { }

//     @Post()
//     @ApiResponse({
//         status: HttpStatus.CREATED,
//         description: 'Compra creada exitosamente',
//         type: Compra,
//     })
//     @ApiResponse({
//         status: HttpStatus.BAD_REQUEST,
//         description: 'Error al procesar la compra',
//     })
//     async crearCompra(@Body() datosCompra: any): Promise<Compra> {
//         try {
//             return await this.comprasService.crearCompra(datosCompra);
//         } catch (e) {
//             throw new HttpException('Error al procesar la compra', HttpStatus.BAD_REQUEST);
//         }
//     }
// }
