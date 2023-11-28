import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-theme-main',
  templateUrl: './theme-main.component.html',
  styleUrls: ['./theme-main.component.scss']
})
export class ThemeMainComponent implements DoCheck {

  isLogged = false;

  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
    this.isLogged = this.authService.isLoggedIn;
  }

}
