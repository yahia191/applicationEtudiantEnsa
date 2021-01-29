import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Liens } from '../liens';
import { LiensService } from '../liens.service';

@Component({
  selector: 'app-detail-lien',
  templateUrl: './detail-lien.component.html',
  styleUrls: ['./detail-lien.component.css']
})
export class DetailLienComponent implements OnInit {

  id: any;
  liens:any;

  constructor(private route: ActivatedRoute,private router: Router,
    private liensService: LiensService) { }

  ngOnInit(): void {
    this.liens= new Liens();

    this.id = this.route.snapshot.params['id'];
    
    this.liensService.getLien(this.id)
      .then(data => {
        console.log(data)
        this.liens = data;
      }, error => console.log(error));
  }




}
