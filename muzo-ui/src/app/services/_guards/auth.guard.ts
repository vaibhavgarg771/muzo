import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authenticationService: AuthenticationService, private router: Router){}

    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const currentUser = this.authenticationService.currentUserValue;
        if(currentUser){
            return true;
        }
        this.router.navigate(["muzo/login"], { queryParams: { returnUrl: state.url}});
        return false;
    }
}