import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private baseUrl = 'http://localhost:8080/cours';  
  
  constructor(private http:HttpClient) { }  
  
  getCoursList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/admin/show');  
  }  
  
  createOrUpdateCours(cours: object) {  
    return this.http.post(`${this.baseUrl}`+'/admin/add', cours).toPromise();  
    
  }  
  
  deleteCours(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/admin/${id}`, { responseType: 'text' });  
  }  
  
  getCours(id: number) {  
    return this.http.get(`${this.baseUrl}/admin/${id}`).toPromise();  
  }  

  getCoursListUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/user/show');
  }
}
