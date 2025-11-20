import { Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioPageComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

// Debug en consola
console.log('Routes cargadas:', routes);
