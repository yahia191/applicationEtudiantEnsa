/* import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {

  id: number;
  utilisateur: Utilisateur;

  constructor(private route: ActivatedRoute,private router: Router,
    private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateur = new Utilisateur();

    this.id = this.route.snapshot.params['id'];
    
    this.utilisateurService.getUtilisateur(this.id)
      .subscribe(data => {
        console.log(data)
        this.utilisateur = data;
      }, error => console.log(error));
  }

  updateUtilisateur() {
    this.utilisateurService.createOrUpdateUtilisateur(this.id, this.utilisateur)
      .subscribe(data => {
        console.log(data);
        this.utilisateur = new Utilisateur();
        this.gotoList();
      }, error => console.log(error));
  }

}
 */