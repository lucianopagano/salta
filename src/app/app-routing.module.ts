import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './secciones/home/home.component';
const deactivateGuard = new InjectionToken('deactivateGuard');

const routes: Routes = [ 
  { path: 'home',
  component: HomeComponent
},
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canDeactivate: [deactivateGuard],
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
