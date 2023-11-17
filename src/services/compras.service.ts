// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Compra } from 'src/entities/compra.entity';

// @Injectable()
// export class ComprasService {
//     constructor(
//         @InjectRepository(Compra)
//         private comprasRepository: Repository<Compra>,
//     ) { }

//     async crearCompra(datosCompra: any): Promise<Compra> {
//         // Aquí implementarías la lógica para crear una compra.
//         // Por ejemplo, calcular el total, aplicar descuentos, etc.
//         const compra = this.comprasRepository.create(datosCompra);
//         return this.comprasRepository.save(compra);
//     }


// }
