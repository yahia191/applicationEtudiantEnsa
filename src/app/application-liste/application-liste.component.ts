import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ApplicationService } from "../../app/application.service";
import { Application } from "../application";
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-liste',
  templateUrl: './application-liste.component.html',
  styleUrls: ['./application-liste.component.css']
})
export class ApplicationListeComponent implements OnInit {
  applications: any;

  constructor(private applicationService: ApplicationService,
    private router: Router) {}



    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.applicationService.getApplicationList()
      .subscribe(
        data => {
          console.log(data);
          this.applications=data;
         
        },
        error => console.log(error));
    }
  
    deleteApplication(id: any) {
      this.applicationService.deleteApplication(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

    getApplication(id: number){
      this.applicationService.getApplication(id)
        .then(
          data => {
            console.log(data);
          },
          error => console.log(error));
    }

/*     detailApplication(id: number){
      this.router.navigate(['details-application', id]);
    } */
  } 


