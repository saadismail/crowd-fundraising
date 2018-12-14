import { Component, OnInit } from '@angular/core';
import { ProjService } from '../proj.service';
import {Router} from '@angular/router';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  title;
  proDesc;
  milestone;
  fundsRecieved;
  proStatus;
  maxVotes;
  totalVotes;
  category;
  addForm;

  constructor(
    public formBuilder:FormBuilder,
    private projService: ProjService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: ['',[Validators.required]],
      desc: ['',[Validators.required]],
      milestone: ['',[Validators.required]],
      maxvotes: ['',[Validators.required]],
      cat: ['',[Validators.required]]
    });
  }

  onAddProject(data) {
    console.log(data)

    const project={
      title:data.title,
      proDesc: data.desc,
      milestone: data.milestone,
      maxVotes: data.maxvotes,
      category: 1
    }

    this.projService.createProject(project).subscribe(data=>{
      if(data.success){
        this.router.navigate(['/home']);
      }
      else{
      }
    });
    
  }

}
