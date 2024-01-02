import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, Logger } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./roles.decorador";

@Injectable()
export class RolesGuard implements CanActivate {
    private readonly logger = new Logger(RolesGuard.name);

    constructor(private reflector: Reflector) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const rolesRequeridos = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        this.logger.debug('Roles requeridos en RolesGuard:', rolesRequeridos);

        const request = context.switchToHttp().getRequest();
        const usuario = request.user;
        this.logger.debug('Info Usuario en RolesGuard:', usuario);

        if (!usuario || !usuario.roles) {
            this.logger.warn('No se encontraron roles en RolesGuard');
            throw new UnauthorizedException();
        }

        const rolesUsuario = usuario.roles;
        this.logger.debug('Roles del Usuario en RolesGuard:', rolesUsuario);

        const esAutorizado = rolesRequeridos.some(rol => rolesUsuario.includes(rol));
        this.logger.debug('Es autorizado en RolesGuard:', esAutorizado);

        if (!esAutorizado) {
            this.logger.warn("No tiene permisos para acceder a este recurso");
            throw new UnauthorizedException("No tiene permisos para acceder a este recurso");
        }

        return true;
    }
}
