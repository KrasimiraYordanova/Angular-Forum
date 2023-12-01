import { Inject, Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { environment } from "../environments/environment";
import { API_ERROR } from './shared/constants/contants';
import { Router } from '@angular/router';

const apiUrl = environment.apiURL;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(@Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    if(request.url.startsWith('/api')) {
      request = request.clone({url: request.url.replace('/api', apiUrl), withCredentials: true})
    }
    return next.handle(request).pipe(catchError(err => {
      this.apiError.next(err);
      this.router.navigate(['/error'])
      return [err];
    }));
  }
}

// creating provider
export const authInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
