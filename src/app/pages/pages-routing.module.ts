import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabajosComponent } from './trabajos/trabajos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./servicios/servicios.module').then(m => m.ServiciosModule)
  },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
