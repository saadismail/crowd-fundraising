import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';
import {UserService} from 'app/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  uid;
  pid;
  voteForm;
  status=false;
  constructor(public formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.voteForm=this.formBuilder.group({
      uid:['',[Validators.required]],
      pid:['',[Validators.required]]
    });
  }

  onClickSubmit(data){
    const user={
      userId:data.uid,
      projectId:data.pid
    }
    this.userService.voteProject(user).subscribe(data=>{
      this.status=data.success;
    })
  }

}
