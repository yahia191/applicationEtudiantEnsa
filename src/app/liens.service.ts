import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LiensService {
  private baseUrl = 'http://localhost:8080/lien';  
  
  constructor(private http:HttpClient) { }  
  
  getLienList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/admin/show');  
  }  
  
  createOrUpdateLien(lien: object) { 
    return this.http.post(`${this.baseUrl}`+'/admin/add', lien).toPromise();  
    
  }  
  
  deleteLien(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/admin/${id}`, { responseType: 'text' });  
  }  
  
  getLien(id: number) {  
    return this.http.get(`${this.baseUrl}/admin/${id}`).toPromise();  
  }  

  getLienListUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/user/show');
  }
}
