import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionesService } from 'src/services/region.service';
import { RegionesController } from 'src/controllers/region.controller';
import { Region } from '../entities/region.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Region])],
    providers: [RegionesService],
    controllers: [RegionesController],
})
export class RegionesModule { }