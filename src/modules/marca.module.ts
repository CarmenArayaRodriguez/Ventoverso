import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from 'src/entities/marca.entity';
import { MarcaService } from 'src/services/marca.service';
import { MarcaController } from 'src/controllers/marca.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Marca])],
    providers: [MarcaService],
    controllers: [MarcaController],
})
export class MarcaModule { }