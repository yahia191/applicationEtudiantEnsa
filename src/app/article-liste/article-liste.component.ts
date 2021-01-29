import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ArticleService } from "../../app/article.service";
import { Article } from "../article";
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-liste',
  templateUrl: './article-liste.component.html',
  styleUrls: ['./article-liste.component.css']
})
export class ArticleListeComponent implements OnInit {
  articles: any;

  constructor(private articleService: ArticleService,
    private router: Router) {}



    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.articleService.getArticleList()

      .subscribe(
        data => {
          console.log(data);
          this.articles=data;
         
        },
        error => console.log(error));
    }
  
    deleteArticle(id: any) {
      this.articleService.deleteArticle(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
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
    
    detailArticle(id: number){
      this.router.navigate(['details-article', id]);
    }
  
  }
