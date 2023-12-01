import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardActivate implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}


    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
        return this.authService.user$.pipe(
            take(1),
            map(user => {
                const loginRequired = route.data['loginRequired'];
                if(loginRequired === undefined || !!user === loginRequired) { return true; }
                return !!user ? this.router.createUrlTree(['/theme']) : this.router.createUrlTree(['/auth/login']);
                // return this.router.createUrlTree(['/auth/login?returnUrl=${route.url}']);
            })
        )
    }
    
}