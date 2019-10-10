import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './secciones/home/home.component';
import { AltahistoriaComponent } from './secciones/alta/altahistoria/altahistoria.component';
const deactivateGuard = new InjectionToken('deactivateGuard');

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'alta_historia_clinica',
    component: AltahistoriaComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canDeactivate: [deactivateGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
