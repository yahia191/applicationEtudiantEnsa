import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {

  constructor(private applicationservice:ApplicationService) { }  
  
  application : Application=new Application();  
  submitted = false;  
  etat2:boolean | undefined ;
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  applicationsaveform=new FormGroup({  
    titre:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    description:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    lien:new FormControl('' , [Validators.required , Validators.minLength(5) ] ), 
    etat:new FormControl('',[Validators.required])
  });  

  
  saveApplication(saveApplication: any){  
    this.application=new Application();     
    this.application.titre=this.ApplicationTitre?.value
    this.application.status=this.ApplicationEtat;
    this.application.desc=this.ApplicationDesc?.value
    this.application.lien_application=this.Applicationlien?.value;  
    this.submitted = true;  
    console.log(this.application.status)
    this.save();  
  }  

    
  
  save() {  
    this.applicationservice.createOrUpdateApplication(this.application)  
    .then(son => {
      console.log('son', son); 
    })
    .catch(err => {
      console.log(err);
    });
    this.application = new Application();  
  }  
  
  get ApplicationTitre(){  
  
    return this.applicationsaveform.get('titre');  
  }  
  
  get ApplicationDesc(){  
    return this.applicationsaveform.get('description');  
  }  

  get ApplicationEtat(){  
   
    return this.etat2; 

  } 
  checkCheckBoxvalue(event:any){
    this.etat2 = event.target.checked;
  }

  get Applicationlien(){  
    return this.applicationsaveform.get('lien');  
  }  
  
  addApplicationForm(){  
    this.submitted=false;  
    this.applicationsaveform.reset();  
  }  
}
