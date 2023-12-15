import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./roles.decorador";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const rolesRequeridos = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        console.log('Roles requeridos en RolesGuard:', rolesRequeridos);

        const request = context.switchToHttp().getRequest();
        const usuario = request.user;
        console.log('Info Usuario en RolesGuard:', usuario);

        if (!usuario || !usuario.roles) {
            console.log('No se encontraron roles en RolesGuard');
            throw new UnauthorizedException();
        }

        const rolesUsuario = usuario.roles;
        console.log('Roles del Usuario en RolesGuard:', rolesUsuario);

        const esAutorizado = rolesRequeridos.some(rol => rolesUsuario.includes(rol));
        console.log('Es autorizado en RolesGuard:', esAutorizado);

        if (!esAutorizado) {
            throw new UnauthorizedException("No tiene permisos para acceder a este recurso");
        }

        return true;
    }
}
