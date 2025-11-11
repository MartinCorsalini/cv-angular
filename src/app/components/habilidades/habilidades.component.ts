import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Skill {
  name: string;
  image: string;
}

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule,ScrollRevealDirective],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})

export class HabilidadesComponent {
  skills: Skill[] = [
    { name: 'C', image: 'c.png' },
    { name: 'Java', image: 'java.png' },
    { name: 'JavaScript', image: 'JavaScript.png' },
    { name: 'TypeScript', image: 'typescript.png' },
    { name: 'Angular', image: 'Angular.png' },
    { name: 'HTML', image: 'html.png' },
    { name: 'CSS', image: 'css.png' },
    { name: 'Bootstrap', image: 'Bootstrap.png' },
    { name: 'SQL', image: 'sql.png' },
    { name: 'MySQL', image: 'mysql.png' },
    { name: 'Git', image: 'git.png' },
    { name: 'Github', image: 'github.png' },
    { name: 'Trello', image: 'trello.png' },
    { name: 'Postman', image: 'postman.svg' },
    { name: 'Jira', image: 'jira.png' }
  ];

  constructor(private languageService: LanguageService) {}

  translate(key: string): string {
    return this.languageService.translate(key);
  }
}