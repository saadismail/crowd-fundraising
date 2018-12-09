import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import {AuthService} from 'app/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;
  password;
  logInForm;
  tok;
  constructor(public formBuilder:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.logInForm=this.formBuilder.group({
      name:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  onClickSubmit(data){
    const user={
      email:data.name,
      password:data.password
    }
    this.name=data.name;
    this.password=data.password;
    this.authService.authenticateUser(user).subscribe(data=>{
      this.authService.storeUserData(data.token,data.user)
    });
    this.authService.getProfile().subscribe(data=>{
      this.tok=data.user.userEmail;
    })
  }

}
