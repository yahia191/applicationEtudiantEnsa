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
  articles: Observable<Article[]> | undefined;

  constructor(private articleService: ArticleService,
    private router: Router) {}



    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.articles = this.articleService.getArticleList();
    }
  
    /* deleteArticle(id: number) {
      this.articleService.deleteArticle(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
  
    updateArticle(id: number){
      this.router.navigate(['update', id]);
    } */
  }
