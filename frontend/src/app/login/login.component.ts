import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;
  password;
  logInForm;

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.logInForm=this.formBuilder.group({
      name:[this.name,[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  onClickSubmit(data){
    this.name=data.name;
    this.password=data.password;
  }

}
