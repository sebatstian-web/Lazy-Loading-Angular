import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

@NgModule({
  declarations: [InicioComponent, ContactoComponent, TrabajosComponent],
  imports: [CommonModule, PagesRoutingModule]
})
export class PagesModule {}
