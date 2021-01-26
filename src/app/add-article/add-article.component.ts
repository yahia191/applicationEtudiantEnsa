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
    this.article.titre=this.ApplicationTitre?.value
    this.article.etat=this.ApplicationEtat?.value;
    this.article.desc=this.ApplicationDesc?.value
    this.article.lien_article=this.Applicationlien?.value;  
    this.submitted = true;  
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
  
  get ApplicationTitre(){  
    return this.articlesaveform.get('titre');  
  }  
  
  get ApplicationDesc(){  
    return this.articlesaveform.get('description');  
  }  

  get ApplicationEtat(){  
    return this.articlesaveform.get('etat');  
  } 

  get Applicationlien(){  
    return this.articlesaveform.get('lien');  
  }  
  
  addApplicationForm(){  
    this.submitted=false;  
    this.articlesaveform.reset();  
  }  
}
