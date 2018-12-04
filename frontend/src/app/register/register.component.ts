import { Component, OnInit, NgModule } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
interface User{
  name:string;
  password:string
  ccnumber:number;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name;
  password;
  ccNumber;
  email;
  cnic;
  registerForm;

  constructor(public formBuilder:FormBuilder) { 
  }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      name:[this.name,[Validators.required]],
      email:['',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      ccNumber:['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      cnic:['',[Validators.required,Validators.minLength(13),Validators.maxLength(13)]]
    });
  
  }
 
   onClickSubmit(data){
    this.name=data.name;
    this.password=data.password;
    this.ccNumber=data.ccNumber;
    this.email=data.email;
    this.cnic=data.cnic;

  }

}
