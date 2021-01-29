import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://localhost:8080/article';  
  
  constructor(private http:HttpClient) { }  
  
  getArticleList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/admin/show');  
  }  
  
  createOrUpdateArticle(article: object) {  
    return this.http.post(`${this.baseUrl}`+'/admin/add', article).toPromise();  
    
  }  
  
  deleteArticle(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/admin/${id}`, { responseType: 'text' });  
  }  
  
  getArticle(id: number) {  
    return this.http.get(`${this.baseUrl}/admin/${id}`).toPromise();  
  }  

  getArticleListUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/user/show');
  }
}
