import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import {AuthService} from 'app/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  delForm;
  uid;
  status=false;
  info
  constructor(public formBuilder:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.delForm=this.formBuilder.group({
      uid:['',[Validators.required]]
    });
  }
  onClickSubmit(data){
    this.status=true;
    const user={
      uid:data.uid
    }
    // this.authService.deleteUser(data.uid).subscribe(data=>{
    //   this.status=data.success;
    // })
   this.info=data.uid;
    this.authService.getUser(data.uid).subscribe(data=>{
      this.info=data.success;
    })
  }

}
