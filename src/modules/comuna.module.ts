import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComunaService } from 'src/services/comuna.service';
import { ComunaController } from 'src/controllers/comuna.controller';
import { Comuna } from 'src/entities/comuna.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Comuna])],
    providers: [ComunaService],
    controllers: [ComunaController],
})
export class ComunaModule { }