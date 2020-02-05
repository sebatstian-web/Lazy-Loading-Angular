import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { HostingComponent } from './hosting/hosting.component';
import { PlanesInternetComponent } from './planes-internet/planes-internet.component';

@NgModule({
  declarations: [ServiciosComponent, HostingComponent, PlanesInternetComponent],
  imports: [CommonModule, ServiciosRoutingModule]
})
export class ServiciosModule {}
