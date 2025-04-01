import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio01Component } from './exercicio01/exercicio01.component';
import { Exercicio02Component } from './exercicio02/exercicio02.component';

const routes: Routes = [
  { path: 'exercicio01', component: Exercicio01Component },
  { path: 'exercicio02', component: Exercicio02Component },
  { path: '', redirectTo: '/exercicio01', pathMatch: 'full' } // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

