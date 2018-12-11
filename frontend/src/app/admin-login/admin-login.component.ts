import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import {AuthService} from 'app/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  name;
  password;
  adForm;
  status;
  constructor(public formBuilder:FormBuilder,private authService:AuthService,private router:Router) { }
  ngOnInit() {
    this.adForm=this.formBuilder.group({
      name:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  onClickSubmit(data){
    this.router.navigate(['/home']);
  }

}
