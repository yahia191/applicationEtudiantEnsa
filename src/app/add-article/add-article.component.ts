import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
 constructor(private articleservice:ArticleService) { }  
  
  article : Article=new Article();  
  submitted = false; 
  etat3:boolean | undefined ; 
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  articlesaveform=new FormGroup({  
    titre:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    description:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    lien:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    etat:new FormControl('',[Validators.required])
  });  

  
  saveArticle(saveArticle: any){  
    this.article=new Article();     
    this.article.titre=this.ArticleTitre?.value
    this.article.status=this.ArticleEtat;
    this.article.desc=this.ArticleDesc?.value
    this.article.lien_article=this.Articlelien?.value;  
    this.submitted = true; 
    console.log(this.article.status) 
    this.save();  
  }  
  
  save() {  
    this.articleservice.createOrUpdateArticle(this.article)  
    .then(son => {
      console.log('son', son); 
    })
    .catch(err => {
      console.log(err);
    });
    this.article = new Article();  
  }  
  
  get ArticleTitre(){  
    return this.articlesaveform.get('titre');  
  }  
  
  get ArticleDesc(){  
    return this.articlesaveform.get('description');  
  }  

  get ArticleEtat(){  
    return this.etat3;  
  } 
  checkCheckBoxvalue(event:any){
    this.etat3 = event.target.checked;
  }

  get Articlelien(){  
    return this.articlesaveform.get('lien');  
  }  
  
  addArticleForm(){  
    this.submitted=false;  
    this.articlesaveform.reset();  
  }  
}
