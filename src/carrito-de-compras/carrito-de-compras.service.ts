import { Injectable } from '@nestjs/common';

@Injectable()
export class CarritoDeComprasService {
    getCarritoDeCompras(): string {
        return 'Carrito de compras';
    }
}