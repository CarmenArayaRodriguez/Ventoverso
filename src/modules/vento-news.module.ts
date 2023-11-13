import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentoNews } from 'src/entities/vento-news.entity';
import { VentoNewsController } from 'src/controllers/vento-news.controller';
import { VentoNewsService } from 'src/services/vento-news.service';

@Module({
    imports: [TypeOrmModule.forFeature([VentoNews])],
    controllers: [VentoNewsController],
    providers: [VentoNewsService],
})
export class VentoNewsModule { }
