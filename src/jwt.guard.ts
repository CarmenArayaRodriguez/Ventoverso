import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JWTGuard implements CanActivate {
    private readonly logger = new Logger(JWTGuard.name);

    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization;
        this.logger.debug('Token recibido en JWTGuard:', token);
        if (!token) {
            throw new UnauthorizedException("Token no proporcionado");
        }
        try {
            const secret = process.env.JWT_SECRET;
            const payload = await this.jwtService.verifyAsync(token.replace('Bearer ', ''), { secret });
            this.logger.log('Payload decodificado en JWTGuard:', payload);
            request.user = payload;
        } catch (e) {
            this.logger.error('Error en JWTGuard:', e.message);
            throw new UnauthorizedException("Token inválido o expirado");
        }
        return true;
    }
}
