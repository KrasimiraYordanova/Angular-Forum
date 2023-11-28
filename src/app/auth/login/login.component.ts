import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {}

  loginHandler(): void {
    this.authService.user = {
      username: "Aiden",
      email: "aidenj@gmail.com"
    } as any

    this.router.navigate(["/"]);
  }

}
