import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CoursService } from "../../app/cours.service";
import { Cours } from "../cours";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours-liste',
  templateUrl: './cours-liste.component.html',
  styleUrls: ['./cours-liste.component.css']
})
export class CoursListeComponent implements OnInit {
  courss: any;

  constructor(private coursService: CoursService,
    private router: Router) {}



    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.coursService.getCoursList()
      .subscribe(
        data => {
          console.log(data);
          this.courss=data;
         
        },
        error => console.log(error));
    }
  
    deleteCours(id: any) {
      this.coursService.deleteCours(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
  
    getCours(id: number){
      this.coursService.getCours(id)
        .then(
          data => {
            console.log(data);
          },
          error => console.log(error));
    }
    detailCours(id: number){
      this.router.navigate(['details-cours', id]);
    }
  }
