import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:8080/application';  
  
  constructor(private http:HttpClient) { }  
  
  getApplicationList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/admin/show');  
  }  
  
  createOrUpdateApplication(application: Application) {  
    console.log(application.status)
    return this.http.post(`${this.baseUrl}`+'/admin/add', application).toPromise();  
  }  
  
  deleteApplication(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/admin/${id}`, { responseType: 'text' });  
  }  
  
  getApplication(id: number) {  
    return this.http.get(`${this.baseUrl}/admin/${id}`).toPromise();  
  }  
  getApplicationListUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/user/show');
  }
}
