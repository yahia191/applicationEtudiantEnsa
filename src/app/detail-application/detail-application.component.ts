import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-detail-application',
  templateUrl: './detail-application.component.html',
  styleUrls: ['./detail-application.component.css']
})
export class DetailApplicationComponent implements OnInit {
  id: any;
  application: any;

  constructor(private route: ActivatedRoute,private router: Router,
    private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.application = new Application();

    this.id = this.route.snapshot.params['id'];
    
    this.applicationService.getApplication(this.id)
      .then(data => {
        console.log(data)
        this.application = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['applications']);
  }
  downloadFile(){
    let link = document.createElement("a");
    link.download = "filename";
    link.href = "assets/applications/application.docx";
    link.click();
}

}
