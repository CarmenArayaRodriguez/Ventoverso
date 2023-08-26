import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogYNoticiasService {
    getBlogYNoticias(): string {
        return 'Blog y noticias';
    }
}
