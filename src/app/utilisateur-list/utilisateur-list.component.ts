import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { UtilisateurService } from "../../app/utilisateur.service";
import { Utilisateur } from "../utilisateur";
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})

export class UtilisateurListComponent implements OnInit {
  utilisateurs : any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private utilisateurService: UtilisateurService,
    private router: Router) {}



    ngOnInit() {
      this.reloadData();
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5
      };
    }
  
    reloadData() {
      this.utilisateurService.getUtilisateurList().subscribe(data => {
        this.utilisateurs = data;
        this.dtTrigger.next();
      });
      
      
      
    }
  
    deleteUtilisateur(id: any) {
      this.utilisateurService.deleteUtilisateur(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }


  
  
    /* updateStudent(id: number){  
      this.utilisateurService.getUtilisateur(id)  
        .then(  
          data => {  
            this.utilisateurs=data             
          },  
          error => console.log(error));  
    }  
    utilisateurupdateform=new FormGroup({  
      utilisateur_id:new FormControl(), 
      utilisateur_prenom:new FormControl(),  
      utilisateur_nom:new FormControl(),  
      utilisateur_email:new FormControl(),  
    });  

    updateUser(updusr){  
      this.utilisateurs=new Utilisateur();   
     this.utilisateurs.id=this.UtilisateurId.value;  
     this.utilisateurs.nom=this.UtilisateurNom.value;  
     this.utilisateurs.prenom=this.UtilisateurPrenom.value;  
     this.utilisateurs.email=this.UtilisateurEmail.value;  
    }

    get UtilisateurNom():any{  
      return this.utilisateurupdateform.get('utilisateur_prenom');  
    }  
    
    get UtilisateurEmail():any{  
      return this.utilisateurupdateform.get('utilisateur_nom');  
    }  
    
    get UtilisateurPrenom():any{  
      return this.utilisateurupdateform.get('utilisateur_email');  
    }  
    
    get UtilisateurId():any{  
      return this.utilisateurupdateform.get('utilisateur_id');  
    }   */
  }
