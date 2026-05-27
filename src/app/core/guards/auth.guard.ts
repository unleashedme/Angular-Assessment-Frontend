import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this.authService.isLoggedIn()){
            this.router.navigate(['/auth']);
            return false;
        }


        const userRole = this.authService.getRole();

        if(state.url.includes('/admin') && userRole!=='Admin'){
            this.router.navigate(['/dashboard']);
            return false;
        }

        return true;
    }
}