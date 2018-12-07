import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import {UserService} from 'app/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-funds-send',
  templateUrl: './funds-send.component.html',
  styleUrls: ['./funds-send.component.css']
})
export class FundsSendComponent implements OnInit {
  uid;
  pid;
  amount;
  fundForm;
  status=false;

  constructor(public formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.fundForm=this.formBuilder.group({
      uid:['',[Validators.required]],
      pid:['',[Validators.required]],
      amount:['',[Validators.required]]
    });
  }
  onClickSubmit(data){
    const user={
      userId:data.uid,
      amount:data.amount,
      projectId:data.pid
    }
    this.userService.fundProject(user).subscribe(data=>{
      this.status=data.success;
    })
  }

}
