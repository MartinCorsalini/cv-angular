import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface ContactCard {
  type: 'linkedin' | 'email' | 'github' | 'download';
  icon: string;
  label: string;
  link: string;
  bgColor: string;
}

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule,ScrollRevealDirective],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'

})
export class ContactoComponent {
  contacts: ContactCard[] = [
    {
      type: 'linkedin',
      icon: 'fab fa-linkedin',
      label: 'Martin Ibañez Corsalini',
      link: 'https://www.linkedin.com/in/Martin-ibañez',
      bgColor: 'bg-linkedin'
    },
    {
      type: 'email',
      icon: 'fas fa-envelope',
      label: 'martincorsalini@outlook.com',
      link: 'mailto:martincorsalini@outlook.com',
      bgColor: 'bg-email'
    },
    {
      type: 'github',
      icon: 'fab fa-github',
      label: 'MartinCorsalini',
      link: 'https://github.com/MartinCorsalini',
      bgColor: 'bg-github'
    },
    {
      type: 'download',
      icon: 'fas fa-file-download',
      label: this.getDownloadLabel(),
      link: 'assets/images/Martin Ezequiel Ibañez Corsalini - CV.pdf',
      bgColor: 'bg-download'
    }
  ];

  constructor(private languageService: LanguageService) {
    // Actualizar el label del CV cuando cambie el idioma
    this.languageService.currentLang$.subscribe(() => {
      this.contacts[3].label = this.getDownloadLabel();
    });
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  getDownloadLabel(): string {
    return this.languageService.translate('descargar.cv');
  }
}