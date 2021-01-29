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
import { LoginComponent } from './login/login.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DetailApplicationComponent } from './detail-application/detail-application.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { DetailCoursComponent } from './detail-cours/detail-cours.component';
import { DetailLienComponent } from './detail-lien/detail-lien.component';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'view-utilisateur', component: UtilisateurListComponent },  
  { path: 'add-utilisateur', component: AddUtilisateurComponent },  
  { path: 'add-cours', component: AddCoursComponent },  
  { path: 'view-cours', component: CoursListeComponent } ,
  { path: 'add-application', component: AddApplicationComponent },  
  { path: 'view-application', component: ApplicationListeComponent }  ,
  { path: 'add-article', component: AddArticleComponent },  
  { path: 'view-article', component: ArticleListeComponent },
  { path: 'add-liens', component: AddLienComponent },  
  { path: 'view-liens', component: LiensListeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'etudiant', component:EtudiantComponent },
  { path: 'details-application/:id', component: DetailApplicationComponent },
  { path: 'details-article/:id', component: DetailArticleComponent },
  { path: 'details-cours/:id', component: DetailCoursComponent },
  { path: 'details-lien/:id', component: DetailLienComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
