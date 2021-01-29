import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : any;
  password : any; 

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  utilisateurupdateform=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });
  
  ngOnInit(): void {
  }

  
  onSubmit(){
    this.email=this.Email?.value;
    this.password=this.Password?.value;
    if(this.email==="aityaich.yahia@gmail.com" && this.password==="12345678"){
      this.router.navigate(['/view-utilisateur']);
    }else if (this.email==="youssef@gmail.com" && this.password==="12345678" ){
      this.router.navigate(['/etudiant']);
    }else {
      window.location.reload()
    }
  }

  get Email(){
    return this.utilisateurupdateform.get('email');
  }
  get Password(){
    return this.utilisateurupdateform.get('password');
  }


}
