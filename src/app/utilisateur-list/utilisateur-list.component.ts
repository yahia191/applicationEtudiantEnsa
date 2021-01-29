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
  constructor(private utilisateurservice:UtilisateurService) { }

  utilisateursArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();

  utilisateurs: any ;
  utilisateur : Utilisateur=new Utilisateur();
  deleteMessage=false;
  utilisateurlist:any;
  isupdated = false;


  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.utilisateurservice.getUtilisateurList().subscribe(data =>{
    this.utilisateurs =data;
    this.dtTrigger.next();
    })
  }

  deleteUtilisateur(id: number) {
    this.utilisateurservice.deleteUtilisateur(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.utilisateurservice.getUtilisateurList().subscribe(data =>{
            this.utilisateurs =data
            })
        },
        error => console.log(error));
  }

  updateUtilisateur(id: number){
    this.utilisateurservice.getUtilisateur(id)
      .then(
        data => {
          this.utilisateurlist=[data]
        },
        error => console.log(error));
  }

  utilisateurupdateform=new FormGroup({
    utilisateur_id:new FormControl(),
    utilisateur_nom:new FormControl(),
    utilisateur_email:new FormControl(),
    utilisateur_prenom:new FormControl()
  });

  updateStu(updstu: any){
    this.utilisateur=new Utilisateur();
   this.utilisateur.id=this.UtilisateurId?.value;
   this.utilisateur.nom=this.UtilisateurName?.value;
   this.utilisateur.email=this.UtilisateurEmail?.value;
   this.utilisateur.prenom=this.UtilisateurPrenom?.value;


   this.utilisateurservice.createOrUpdateUtilisateur(this.utilisateur).then (
    _data => {
      this.isupdated=true;
      this.utilisateurservice.getUtilisateurList().subscribe(data =>{
        this.utilisateurs =[data]
        })
    },
    error => console.log(error));
  }

  get UtilisateurName(){
    return this.utilisateurupdateform.get('utilisateur_nom');
  }

  get UtilisateurEmail(){
    return this.utilisateurupdateform.get('utilisateur_email');
  }

  get UtilisateurPrenom(){
    return this.utilisateurupdateform.get('utilisateur_prenom');
  }

  get UtilisateurId(){
    return this.utilisateurupdateform.get('utilisateur_id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
  }