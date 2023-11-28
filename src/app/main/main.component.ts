import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements DoCheck{

  isLogged = false;

  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
    this.isLogged = this.authService.isLoggedIn;
  }

}
