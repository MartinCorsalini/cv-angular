import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translations: Translations = {
    es: {
      "idioma.español": "Español",
      "idioma.ingles": "Inglés",
      "nav.sobreMi": "Sobre Mí",
      "nav.habilidades": "Habilidades",
      "nav.educacion": "Educación",
      "nav.proyectos": "Proyectos",
      "nav.contacto": "Contacto",
      "profesion": "Desarrollador Full Stack",
      "titulo.sobreMi": "Sobre Mí",
      "sobreMi.1": "Hola! Estoy recientemente recibido (diciembre 2024) como Técnico Universitario en Programación. En este tramo de 2 años, he adquirido experiencia práctica en el desarrollo de aplicaciones front-end utilizando Angular y TypeScript, complementando mis conocimientos previos en HTML, CSS y JavaScript.",
      "sobreMi.2": "Esta formación me ha permitido afianzar mis habilidades en desarrollo de aplicaciones modernas y escalables, siguiendo buenas prácticas de desarrollo y patrones de diseño.",
      "sobreMi.3": "A lo largo de mi formación académica, también he trabajado con otras tecnologías como MySQL, y he desarrollado aplicaciones en lenguaje C y Java. Además manejo herramientas de metodologías agiles como Jira (Scrum) y gestión de tareas como Trello como también manejo de Git y GIthub.",
      "titulo.habilidades": "Habilidades",
      "titulo.educacion": "Educación",
      "educacion.1.titulo": "Tecnicatura Universitaria en Programación",
      "educacion.1.lugar": "Universidad Tecnológica Nacional (UTN) – Mar del Plata 2022 - 2024",
      "educacion.1.descripcion": "Técnico Universitario en Programación – Promedio: 8.5",
      "educacion.2.titulo": "Contador Público",
      "educacion.2.lugar": "Universidad Nacional de Mar del Plata (UNMDP) 2015 - 2020",
      "educacion.2.descripcion": "Completé hasta el tercer año de la carrera de Contador Público, aprobando un total de 20 materias. Esta experiencia me proporcionó una base sólida en áreas como contabilidad, auditoría y gestión financiera. Aunque decidí orientarme hacia el desarrollo de software, los conocimientos adquiridos en esta carrera complementaron mi perfil con habilidades analíticas y organizacionales.",
      "titulo.idiomas": "Idiomas",
      "idiomas.ingles.titulo": "Inglés",
      "idiomas.ingles.lugar": "Instituto Cultural Americano",
      "idiomas.ingles.descripcion": "B2 (Intermedio alto, capacidad de mantener conversaciones fluidas y comprensión de textos complejos).",
      "idiomas.aleman.titulo": "Alemán",
      "idiomas.aleman.lugar": "Laboratorio de Idiomas - UNMDP",
      "idiomas.aleman.descripcion": "Alemán: A2 (Comunicaciones cotidianas y vocabulario básico).",
      "titulo.proyectos": "Proyectos",
      "proyectos.toolix.titulo": "Toolix",
      "proyectos.toolix.descripcion": "Toolix es una plataforma diseñada para conectar clientes con profesionales en servicios como gasistas, plomeros y electricistas. Permite a los usuarios buscar, filtrar y contactar fácilmente al profesional ideal según su ubicación y necesidades.",
      "proyectos.tracker.titulo": "Portfolio Tracker (Próximamente)",
      "proyectos.tracker.descripcion": "Tracker de tu cartera de activos.",
      "titulo.contacto": "Contacto",
      "footer": "© 2025 Martin Ezequiel Ibañez Corsalini - Todos los derechos reservados",
      "descargar.cv": "Descargar CV"
    },
    en: {
      "idioma.español": "Spanish",
      "idioma.ingles": "English",
      "nav.sobreMi": "About Me",
      "nav.habilidades": "Skills",
      "nav.educacion": "Education",
      "nav.proyectos": "Projects",
      "nav.contacto": "Contact",
      "profesion": "Full Stack Developer",
      "titulo.sobreMi": "About Me",
      "sobreMi.1": "Hi! I recently graduated (December 2024) with a Technical University Degree in Programming. During these 2 years, I have gained hands-on experience in front-end development using Angular and TypeScript, complementing my previous knowledge in HTML, CSS, and JavaScript.",
      "sobreMi.2": "This education has allowed me to strengthen my skills in developing modern and scalable applications, following good development practices and design patterns.",
      "sobreMi.3": "Throughout my academic training, I have also worked with other technologies like MySQL and developed applications in C and Java. I also use agile methodology tools such as Jira (Scrum), task management with Trello, and version control with Git and GitHub.",
      "titulo.habilidades": "Skills",
      "titulo.educacion": "Education",
      "educacion.1.titulo": "Technical University Degree in Programming",
      "educacion.1.lugar": "National Technological University (UTN) – Mar del Plata 2022 - 2024",
      "educacion.1.descripcion": "Technical University Degree in Programming – GPA: 8.5",
      "educacion.2.titulo": "Public Accountant",
      "educacion.2.lugar": "National University of Mar del Plata (UNMDP) 2015 - 2020",
      "educacion.2.descripcion": "I completed up to the third year of the Public Accounting degree, passing a total of 20 subjects. This experience gave me a solid foundation in areas such as accounting, auditing, and financial management. Although I decided to move into software development, the knowledge acquired in this career complemented my profile with analytical and organizational skills.",
      "titulo.idiomas": "Languages",
      "idiomas.ingles.titulo": "English",
      "idiomas.ingles.lugar": "American Cultural Institute",
      "idiomas.ingles.descripcion": "B2 (Upper-intermediate level, able to hold fluent conversations and understand complex texts).",
      "idiomas.aleman.titulo": "German",
      "idiomas.aleman.lugar": "Language Lab - UNMDP",
      "idiomas.aleman.descripcion": "German: A2 (Everyday communication and basic vocabulary).",
      "titulo.proyectos": "Projects",
      "proyectos.toolix.titulo": "Toolix",
      "proyectos.toolix.descripcion": "Toolix is a platform designed to connect clients with professionals in services such as gas fitters, plumbers, and electricians. It allows users to easily search, filter, and contact the ideal professional based on their location and needs.",
      "proyectos.tracker.titulo": "Portfolio Tracker (Coming Soon)",
      "proyectos.tracker.descripcion": "Track your asset portfolio.",
      "titulo.contacto": "Contact",
      "footer": "© 2025 Martin Ezequiel Ibañez Corsalini - All rights reserved",
      "descargar.cv": "Download CV"
    }
  };

  private currentLangSubject = new BehaviorSubject<string>(
    localStorage.getItem('lang') || 'es'
  );
  
  public currentLang$: Observable<string> = this.currentLangSubject.asObservable();

  constructor() {}

  getCurrentLang(): string {
    return this.currentLangSubject.value;
  }

  setLanguage(lang: string): void {
    this.currentLangSubject.next(lang);
    localStorage.setItem('lang', lang);
  }

  translate(key: string): string {
    const lang = this.getCurrentLang();
    return this.translations[lang]?.[key] || key;
  }

  getTranslations(lang: string): { [key: string]: string } {
    return this.translations[lang] || {};
  }
}