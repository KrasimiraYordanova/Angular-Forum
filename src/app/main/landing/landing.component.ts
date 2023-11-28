import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements DoCheck {

  isLogged = false;

  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
    this.isLogged = this.authService.isLoggedIn;
  }

}
