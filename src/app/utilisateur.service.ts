import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class UtilisateurService {  
  
  private baseUrl = 'http://localhost:8080/utilisateur';  
  
  constructor(private http:HttpClient) { }  
  
  getUtilisateurList() {  
    return this.http.get(`${this.baseUrl}`+'/admin/show');  
  }  
  
  createOrUpdateUtilisateur(utilisateur: object) {  
    console.log(`${this.baseUrl}`+'/admin/add');
    return this.http.post(`${this.baseUrl}`+'/admin/add', utilisateur).toPromise();  
    
  }  
  
  deleteUtilisateur(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/admin/${id}`, { responseType: 'text' });  
  }  
  
  getUtilisateur(id: number) {  
    return this.http.get(`${this.baseUrl}/admin/${id}`).toPromise();  
  }  

}  