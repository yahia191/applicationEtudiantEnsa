import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit {  
  
  constructor(private utilisateurservice:UtilisateurService) { }  
  
  utilisateur : Utilisateur=new Utilisateur();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  utilisateursaveform=new FormGroup({  
    nom:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    prenom:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    mdp:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    email:new FormControl('',[Validators.required,Validators.email]),  
  });  

  
  saveUtilisateur(saveUtilisateur: any){  
    this.utilisateur=new Utilisateur();     
    this.utilisateur.nom=this.UtilisateurNom?.value
    this.utilisateur.prenom=this.UtilisateurPrenom?.value;
    this.utilisateur.mdp=this.UtilisateurMdp?.value
    this.utilisateur.email=this.UtilisateurEmail?.value;  
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.utilisateurservice.createOrUpdateUtilisateur(this.utilisateur)  
    .then(son => {
      console.log('son', son); 
    })
    .catch(err => {
      console.log(err);
    });
    this.utilisateur = new Utilisateur();  
  }  
  
  get UtilisateurNom(){  
    return this.utilisateursaveform.get('nom');  
  }  
  
  get UtilisateurPrenom(){  
    return this.utilisateursaveform.get('prenom');  
  }  

  get UtilisateurMdp(){  
    return this.utilisateursaveform.get('mdp');  
  } 

  get UtilisateurEmail(){  
    return this.utilisateursaveform.get('email');  
  }  
  
  addUtilisateurForm(){  
    this.submitted=false;  
    this.utilisateursaveform.reset();  
  }  
} 