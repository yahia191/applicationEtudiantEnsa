import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CoursService } from "../../app/cours.service";
import { ArticleService } from "../../app/article.service";
import { ApplicationService } from "../../app/application.service";
import { LiensService } from "../../app/liens.service";
import { Cours } from "../cours";
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  cours: any;
  articles:any;
  applications:any;
  liens:any;
  public listecours :boolean | undefined;
  public listeapplication :boolean | undefined;
  public listelien :boolean | undefined;
  public listearticle :boolean | undefined;
  constructor(private coursService: CoursService,public articleService:ArticleService,
    private applicationService: ApplicationService,public lienService:LiensService,
    private router: Router) { }

  ngOnInit(): void {
    this.listeapplication=false;
    this.listearticle=false;
    this.listecours=false;
    this.listelien=false;
  }


  reloadDataCours() {
    this.coursService.getCoursListUser()
    .subscribe(
      data => {
        console.log(data);
        this.cours=data;
        this.affichelistecours();
      },
      error => console.log(error));
  }
  reloadDataLiens() {
    this.lienService.getLienListUser()
    .subscribe(
      data => {
        console.log(data);
        this.liens=data;
        this.affichelistelien();
      },
      error => console.log(error));
  }
  reloadDataApplication() {
    this.applicationService.getApplicationListUser()
    .subscribe(
      data => {
        console.log(data);
        this.applications=data;
        this.affichelisteapplication();
      },
      error => console.log(error));
  }
  reloadDataArticle() {
    this.articleService.getArticleListUser()
    .subscribe(
      data => {
        console.log(data);
        this.articles=data;
        this.affichelistearticle();
      },
      error => console.log(error));
  }

  affichelistecours(){
    this.listeapplication=false;
    this.listearticle=false;
    this.listecours=true;
    this.listelien=false;
  }

  affichelisteapplication(){
    this.listeapplication=true;
    this.listearticle=false;
    this.listecours=false;
    this.listelien=false;
  }

  affichelistearticle(){
    this.listeapplication=false;
    this.listearticle=true;
    this.listecours=false;
    this.listelien=false;
  }

  affichelistelien(){
    this.listeapplication=false;
    this.listearticle=false;
    this.listecours=false;
    this.listelien=true;
  }


  getApplication(id: number){
    this.applicationService.getApplication(id)
      .then(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }
  getCours(id: number){
    this.coursService.getCours(id)
      .then(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }
  getArticle(id: number){
    this.articleService.getArticle(id)
      .then(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }
  getLien(id: number){
    this.lienService.getLien(id)
      .then(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }
}