import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostingComponent } from './hosting/hosting.component';
import { PlanesInternetComponent } from './planes-internet/planes-internet.component';
import { ServiciosComponent } from './servicios.component';

const routes: Routes = [
  { path: '', component: ServiciosComponent },
  { path: 'hosting', component: HostingComponent },
  { path: 'planes-web', component: PlanesInternetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule {}
