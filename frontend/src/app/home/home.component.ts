import { Component, OnInit } from '@angular/core';
import {ProjService} from 'app/proj.service';
import {Project} from 'app/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pro$:Object;
  constructor(private proj:ProjService) { }

  ngOnInit() {
    this.proj.getProjects().subscribe(data=>this.pro$=data);
    
  }

}
