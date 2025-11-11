import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { FooterComponent } from './layouts/footer/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
}
