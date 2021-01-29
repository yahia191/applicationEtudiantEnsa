import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { AddApplicationComponent } from './add-application/add-application.component';
import { AddLienComponent } from './add-lien/add-lien.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { CoursListeComponent } from './cours-liste/cours-liste.component';
import { ArticleListeComponent } from './article-liste/article-liste.component';
import { ApplicationListeComponent } from './application-liste/application-liste.component';
import { LiensListeComponent } from './liens-liste/liens-liste.component'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './login/login.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DetailApplicationComponent } from './detail-application/detail-application.component';
import { DetailLienComponent } from './detail-lien/detail-lien.component';
import { DetailCoursComponent } from './detail-cours/detail-cours.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
/* import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component'; */

@NgModule({
  declarations: [
    AppComponent,
    AddUtilisateurComponent,
    UtilisateurListComponent,
    AddCoursComponent,
    AddApplicationComponent,
    AddLienComponent,
    AddArticleComponent,
    CoursListeComponent,
    ArticleListeComponent,
    ApplicationListeComponent,
    LiensListeComponent,
    LoginComponent,
    EtudiantComponent,
    DetailApplicationComponent,
    DetailLienComponent,
    DetailCoursComponent,
    DetailArticleComponent,
  /*   UpdateUtilisateurComponent */
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    Ng2SearchPipeModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
