import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from '../cours.service';
import { Cours } from '../cours';

@Component({
  selector: 'app-detail-cours',
  templateUrl: './detail-cours.component.html',
  styleUrls: ['./detail-cours.component.css']
})
export class DetailCoursComponent implements OnInit {
  id: any;
  cours:any;

  constructor(private route: ActivatedRoute,private router: Router,
    private coursService: CoursService) { }

  ngOnInit(): void {
    this.cours = new Cours();

    this.id = this.route.snapshot.params['id'];
    
    this.coursService.getCours(this.id)
      .then(data => {
        console.log(data)
        this.cours = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['cours']);
  }
  downloadFile(){
    let link = document.createElement("a");
    link.download = "filename";
    link.href = "assets/applications/application.docx";
    link.click();
}

}
