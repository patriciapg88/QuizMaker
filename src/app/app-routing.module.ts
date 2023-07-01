import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', title:'Homepage',
    loadComponent: ()=> import('./pages/home/home.component').then(component => component.HomeComponent)},
  {path: 'results', title:'Results',
    loadComponent: ()=> import('./pages/results/results.component').then(component=> component.ResultsComponent)},
  {path: '**',
    redirectTo:'', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
