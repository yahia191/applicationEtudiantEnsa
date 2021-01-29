import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  id: any;
  article:any;

  constructor(private route: ActivatedRoute,private router: Router,
    private articlesService: ArticleService) { }

  ngOnInit(): void {
    this.article= new Article();

    this.id = this.route.snapshot.params['id'];
    
    this.articlesService.getArticle(this.id)
      .then(data => {
        console.log(data)
        this.article = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['articles']);
  }
  downloadFile(){
    let link = document.createElement("a");
    link.download = "filename";
    link.href = "assets/applications/application.docx";
    link.click();
}

}
