import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUtilisateurComponent } from './add-utilisateur.component';

const routes: Routes = [{
  path: "login",
  component: AddUtilisateurComponent,
  data: {
    title: "Dashboard",
  },
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUtilisateurRoutingModule { }
