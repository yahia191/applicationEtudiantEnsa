import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Liens } from '../liens';
import { LiensService } from '../liens.service';

@Component({
  selector: 'app-add-lien',
  templateUrl: './add-lien.component.html',
  styleUrls: ['./add-lien.component.css']
})
export class AddLienComponent implements OnInit {
 constructor(private liensservice:LiensService) { }  
  
  liens : Liens=new Liens();  
  submitted = false;  
  etat5:boolean | undefined ;
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  lienssaveform=new FormGroup({  
    titre:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    description:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    lien:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    etat:new FormControl('',[Validators.required]) 
  });  

  
  saveLiens(saveLiens: any){  
    this.liens=new Liens();     
    this.liens.titre=this.LiensTitre?.value
    this.liens.status=this.LiensEtat;
    this.liens.desc=this.LiensDesc?.value
    this.liens.lien_liens=this.Lienslien?.value;  
    this.submitted = true;  
    this.save();  
  }  
  
  save() {  
    this.liensservice.createOrUpdateLien(this.liens)  
    .then(son => {
      console.log('son', son); 
    })
    .catch(err => {
      console.log(err);
    });
    this.liens = new Liens();  
  }  
  
  get LiensTitre(){  
    return this.lienssaveform.get('titre');  
  }  
  
  get LiensDesc(){  
    return this.lienssaveform.get('description');  
  }  

  get LiensEtat(){  
    return this.etat5;  
  } 
  checkCheckBoxvalue(event:any){
    this.etat5 = event.target.checked;
  }

  get Lienslien(){  
    return this.lienssaveform.get('lien');  
  }  
  
  addLiensForm(){  
    this.submitted=false;  
    this.lienssaveform.reset();  
  }  
}
