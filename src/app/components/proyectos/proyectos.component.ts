import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Proyecto {
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias?: string[];
  colaboradores?: { nombre: string; linkedin?: string }[];
  github?: string;
  video?: string;
  enDesarrollo?: boolean;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule,ScrollRevealDirective],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  modalOpen = false;
  selectedProject: Proyecto | null = null;

  proyectos: Proyecto[] = [
    {
      titulo: 'Toolix',
      descripcion: 'Toolix es una plataforma diseñada para conectar clientes con profesionales en servicios como gasistas, plomeros y electricistas. Permite a los usuarios buscar, filtrar y contactar fácilmente al profesional ideal según su ubicación y necesidades.',
      imagen: 'iconConTexto.png',
      tecnologias: ['Angular', 'JavaScript', 'HTML', 'CSS'],
      colaboradores: [
        { nombre: 'Victoria Prieto', linkedin: 'https://linkedin.com/in/mica-prieto' },
        { nombre: 'Juan Sasserolli', linkedin: 'https://linkedin.com/in/juan-ignacio-sasserolli-837392241' },
        { nombre: 'Leandro Ver', linkedin: 'https://linkedin.com/in/leoemaanuel' },
        { nombre: 'Abril Paez' }
      ],
      github: 'https://github.com/tuProyecto'
    },
    {
      titulo: 'Portfolio Tracker',
      descripcion: 'Tracker de tu cartera de activos.',
      imagen: 'portfolio tracker logo.jpeg',
      enDesarrollo: true
    }
  ];

  constructor(private languageService: LanguageService) {}

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  openModal(proyecto: Proyecto): void {
    this.selectedProject = proyecto;
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
    this.selectedProject = null;
  }
}