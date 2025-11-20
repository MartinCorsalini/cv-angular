import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from '../../components/perfil/perfil.component';
import { SobreMiComponent } from '../../components/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';
import { EducacionComponent } from '../../components/educacion/educacion.component';
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [
    CommonModule,
    PerfilComponent,
    SobreMiComponent,
    HabilidadesComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css']
})
export class InicioPageComponent {
  constructor() {
    console.log('InicioPageComponent cargado'); // Debug
  }
}
