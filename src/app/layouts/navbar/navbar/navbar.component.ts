import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';
import { ThemeService } from '../../../services/theme.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css' 
})


export class NavbarComponent implements OnInit {
  isDarkMode = false;

  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.isDarkMode = theme === 'dark';
    });
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  getCurrentLangLabel(): string {
    const lang = this.languageService.getCurrentLang();
    return lang === 'es' ? this.translate('idioma.español') : this.translate('idioma.ingles');
  }

  changeLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}