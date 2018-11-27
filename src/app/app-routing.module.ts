import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccionesComponent } from './acciones/acciones.component';
import { AccionesDetailComponent } from './acciones-detail/acciones-detail.component';

const routes: Routes = [
  { path: 'acciones', component: AccionesComponent },
  { path: 'detail/:id', component: AccionesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
