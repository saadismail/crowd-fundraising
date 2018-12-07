import { Component, OnInit, NgModule } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';
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
  status=false;

  constructor(public formBuilder:FormBuilder,private authService: AuthService,
    private router: Router) { 
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
     const user={
      username:data.name,
      email:data.email,
      password:data.password,
      cnic:data.cnic,
      ccnum:data.ccNumber
     }


  this.authService.registerUser(user).subscribe(data=>{
    if(data.success){
      this.router.navigate(['/login'])
    }
    else{
      this.router.navigate(['/register']);
    }
  })

  }


}
