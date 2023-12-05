import { Module } from '@nestjs/common';
import { AutenticacionService } from 'src/services/autenticacion.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/entities/cliente.entity';
import { AutenticacionController } from 'src/controllers/autenticacion.controller';

@Module({
    imports: [
        JwtModule.register({
            secret: 'aB3!fGh1#kLmN5^pQrSt7*wxYz0&Zj',
            signOptions: { expiresIn: '1h' },
        }),
        TypeOrmModule.forFeature([Cliente]),
    ],
    controllers: [AutenticacionController],
    providers: [AutenticacionService],
    exports: [AutenticacionService, JwtModule]
})
export class AutenticacionModule { }
