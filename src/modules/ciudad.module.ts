import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadService } from 'src/services/ciudad.service';
import { CiudadController } from 'src/controllers/ciudad.controller';
import { Ciudad } from 'src/entities/ciudad.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Ciudad])],
    providers: [CiudadService],
    controllers: [CiudadController],
})
export class CiudadModule { }
