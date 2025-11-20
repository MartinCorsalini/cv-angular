import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Skill {
  name: string;
  image: string;
  imageDark?: string;
  category: 'frontend' | 'backend' | 'tools';

}

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  selectedCategory: 'all' | 'frontend' | 'backend' | 'tools' = 'all';
  filteredSkills: Skill[] = [];
  isDarkMode: boolean = false;

  skills: Skill[] = [
    // Frontend
    { name: 'Angular', image: 'Angular.png', category: 'frontend' },
    { name: 'TypeScript', image: 'typescript.png', category: 'frontend' },
    { name: 'JavaScript', image: 'JavaScript.png', category: 'frontend' },
    { name: 'HTML', image: 'html.png', category: 'frontend' },
    { name: 'CSS', image: 'css.png', category: 'frontend' },
    { name: 'Bootstrap', image: 'Bootstrap.png', category: 'frontend' },
    { name: 'Tailwind', image: 'tailwindcss.png', category: 'frontend' },
    { name: 'DaisyUi', image: 'daisyui.svg', category: 'frontend' },

    // Backend
    { name: 'Java', image: 'java.png', category: 'backend' },
    { name: 'C', image: 'c.png', category: 'backend' },
    { name: 'SQL', image: 'sql.png', category: 'backend' },
    { name: 'MySQL', image: 'mysql.png', category: 'backend' },

    // Tools
    { name: 'Git', image: 'git.png', category: 'tools' },
    { name: 'Github', image: 'github-white.png', imageDark: 'github-black.png', category: 'tools' },
    { name: 'Trello', image: 'trello.png', category: 'tools' },
    { name: 'Postman', image: 'postman.svg', category: 'tools' },
    { name: 'Jira', image: 'jira.png', category: 'tools' }
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.filteredSkills = this.skills;
    this.detectTheme();
    this.watchThemeChanges();
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  filterByCategory(category: 'all' | 'frontend' | 'backend' | 'tools'): void {
    this.selectedCategory = category;

    if (category === 'all') {
      this.filteredSkills = this.skills;
    } else {
      this.filteredSkills = this.skills.filter(skill => skill.category === category);
    }
  }

  getCategoryLabel(category: string): string {
    const labels: { [key: string]: string } = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'tools': 'Tools'
    };
    return labels[category] || category;
  }

  getSkillImage(skill: Skill): string {
    if (skill.imageDark && this.isDarkMode) {
      return skill.imageDark;
    }
    return skill.image;
  }

  private detectTheme(): void {
    const html = document.documentElement;
    this.isDarkMode = html.getAttribute('data-theme') === 'dark' ||
                      html.classList.contains('dark');
  }

  private watchThemeChanges(): void {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      this.detectTheme();
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    });
  }

  toggleFlip(skill: any) {
  skill.flipped = !skill.flipped;
}
}

