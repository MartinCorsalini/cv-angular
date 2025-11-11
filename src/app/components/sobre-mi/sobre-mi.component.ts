import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule,ScrollRevealDirective],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})

export class SobreMiComponent {
  constructor(private languageService: LanguageService) {}

  translate(key: string): string {
    return this.languageService.translate(key);
  }
}