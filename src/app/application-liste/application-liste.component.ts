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
  applications: Observable<Application[]> | undefined;

  constructor(private applicationService: ApplicationService,
    private router: Router) {}



    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.applications = this.applicationService.getApplicationList();
    }
  
    /* deleteApplication(id: number) {
      this.applicationService.deleteApplication(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
  
    updateApplication(id: number){
      this.router.navigate(['update', id]);
    } */
  }
