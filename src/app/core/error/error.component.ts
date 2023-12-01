import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, take } from 'rxjs';
import { API_ERROR } from 'src/app/shared/constants/contants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  apiError$ = this.apiError.asObservable();

  constructor(@Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>, private router: Router) {
    this.apiError$.pipe(take(1), filter(val => !val)).subscribe(() => {
      this.router.navigate(['/']);
    })
  }



}
