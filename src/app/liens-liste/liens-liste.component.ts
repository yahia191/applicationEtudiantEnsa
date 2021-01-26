import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { LiensService } from "../../app/liens.service";
import { Liens } from "../liens";
import { Router } from '@angular/router';

@Component({
  selector: 'app-liens-liste',
  templateUrl: './liens-liste.component.html',
  styleUrls: ['./liens-liste.component.css']
})
export class LiensListeComponent implements OnInit {
  lienss: Observable<Liens[]> | undefined;

  constructor(private liensService: LiensService,
    private router: Router) {}



    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.lienss = this.liensService.getLienList();
    }
  
    /* deleteLiens(id: number) {
      this.liensService.deleteLiens(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
  
    updateLiens(id: number){
      this.router.navigate(['update', id]);
    } */
  }
