import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./roles.decorador";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requeridos = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);
        console.log('Roles requeridos en RolesGuard:', requeridos);
        const request = context.switchToHttp().getRequest();
        const infoUsuario = request['INFO'];
        console.log('Info Usuario en RolesGuard:', infoUsuario);

        if (!infoUsuario || !infoUsuario.roles) {
            console.log('No se encontraron roles en RolesGuard');
            throw new UnauthorizedException();
        }

        const rolesUsuario = infoUsuario.roles;
        console.log('Roles del Usuario en RolesGuard:', rolesUsuario);

        const autorizado = requeridos.some(rol => rolesUsuario.includes(rol));
        console.log('Es autorizado en RolesGuard:', autorizado);

        if (!autorizado) {
            throw new UnauthorizedException("No tiene permisos para acceder a este recurso");
        }

        return true;
    }
}
