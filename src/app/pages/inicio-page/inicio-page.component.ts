import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/navbar/navbar/navbar.component';
import { PerfilComponent } from '../../components/perfil/perfil.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { EducacionComponent } from '../../components/educacion/educacion.component';
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';
import { SobreMiComponent } from '../../components/sobre-mi/sobre-mi.component';
import { FooterComponent } from '../../layouts/footer/footer/footer.component';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [PerfilComponent,ContactoComponent,EducacionComponent,HabilidadesComponent,ProyectosComponent,SobreMiComponent],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

}
