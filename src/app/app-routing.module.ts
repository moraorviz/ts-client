import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccionesComponent } from './acciones/acciones.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
