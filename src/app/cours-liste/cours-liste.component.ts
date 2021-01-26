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
  courss: Observable<Cours[]> | undefined;

  constructor(private coursService: CoursService,
    private router: Router) {}



    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.courss = this.coursService.getCoursList();
    }
  
    /* deleteCours(id: number) {
      this.coursService.deleteCours(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
  
    updateCours(id: number){
      this.router.navigate(['update', id]);
    } */
  }
