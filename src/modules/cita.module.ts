import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitaService } from 'src/services/cita.service';
import { CitaController } from 'src/controllers/cita.controller';
import { Cita } from 'src/entities/cita.entity';
import { AutenticacionModule } from './autenticacion.module';
import { Cliente } from 'src/entities/cliente.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cita, Cliente]), AutenticacionModule],
    providers: [CitaService],
    controllers: [CitaController],
})
export class CitaModule { }