import { Module } from '@nestjs/common';
import { AutenticacionService } from 'src/services/autenticacion.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/entities/cliente.entity';
import { AutenticacionController } from 'src/controllers/autenticacion.controller';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1h' },
        }),
        TypeOrmModule.forFeature([Cliente]),
    ],
    controllers: [AutenticacionController],
    providers: [AutenticacionService],
    exports: [AutenticacionService, JwtModule]
})
export class AutenticacionModule { }
