import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { LiensService } from "../../app/liens.service";
import { Liens } from "../liens";
import { Router } from '@angular/router';

@Component({
  selector: 'app-liens-liste',
  templateUrl: './liens-liste.component.html',
  styleUrls: ['./liens-liste.component.css']
})
export class LiensListeComponent implements OnInit {
  lienss: any;


  constructor(private liensService: LiensService,
    private router: Router) {}



    ngOnInit() {
      this.reloadData();
     
    }
  
    reloadData() {
      this.lienss = this.liensService.getLienList();
    }

    deleteLiens(id: any) {
      this.liensService.deleteLien(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
    getLien(id: any){
      this.liensService.getLien(id)
        .then(
          data => {
            console.log(data);
          },
          error => console.log(error));
    }
    detailLien(id: number){
      this.router.navigate(['details-lien', id]);
    }

  }
