import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { ITheme } from 'src/app/interfaces/theme';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  themeList: ITheme[] | null = null;

  constructor(private themeService: ThemeService) {}


  ngOnInit(): void {
    this.themeService.loadThemes().subscribe({
      next: (value) => {
        console.log(value);
        this.themeList = value;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
