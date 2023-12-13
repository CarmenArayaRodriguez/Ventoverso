import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JWTGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization;
        console.log('Token recibido en JWTGuard:', token);
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token.replace('Bearer ', ''), { secret: "aB3!fGh1#kLmN5^pQrSt7*wxYz0&Zj" });
            console.log('Payload decodificado en JWTGuard:', payload);
            request['INFO'] = payload;
        } catch (e) {
            console.log('Error en JWTGuard:', e.message);
            throw new UnauthorizedException();
        }
        return true;
    }
}
