import { Injectable } from '@nestjs/common';

@Injectable()
export class CatalogoDeProductosService {
    getCatalogoDeProductos(): string {
        return 'Catálogo de productos';
    }
}
