import { NgModule } from '@angular/core';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';  
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { AddCoursComponent } from './add-cours/add-cours.component';  
import { CoursListeComponent } from './cours-liste/cours-liste.component';  
import { AddLienComponent } from './add-lien/add-lien.component';   
import { LiensListeComponent } from './liens-liste/liens-liste.component';  
import { AddArticleComponent } from './add-article/add-article.component';   
import { ArticleListeComponent } from './article-liste/article-liste.component'; 
import { AddApplicationComponent } from './add-application/add-application.component';   
import { ApplicationListeComponent } from './application-liste/application-liste.component'; 
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'view-utilisateur', pathMatch: 'full' },  
  { path: 'view-utilisateur', component: UtilisateurListComponent },  
  { path: 'add-utilisateur', component: AddUtilisateurComponent },  
  { path: 'add-cour', component: AddCoursComponent },  
  { path: 'view-cours', component: CoursListeComponent } ,
  { path: 'add-application', component: AddApplicationComponent },  
  { path: 'view-application', component: ApplicationListeComponent }  ,
  { path: 'add-article', component: AddArticleComponent },  
  { path: 'view-article', component: ArticleListeComponent },
  { path: 'add-liens', component: AddLienComponent },  
  { path: 'view-liens', component: LiensListeComponent }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
