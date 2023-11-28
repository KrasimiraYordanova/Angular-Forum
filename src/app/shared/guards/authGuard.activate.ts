import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardActivate implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}


    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    // return this.permissions.canActivate(this.currentUser, route.params.id);
    const loginRequired = route.data['loginRequired'];
    if(loginRequired === undefined || this.authService.isLoggedIn === loginRequired) { return true; }
    return this.router.createUrlTree(['/auth/login']);
    return this.router.createUrlTree(['/auth/login?returnUrl=${route.url}']);
    }
    
}