import { Injectable } from '@angular/core';
import{Http,Headers,Response} from '@angular/http';
import {map} from 'rxjs/operators/map';
import{Project} from 'app/project';


@Injectable(
)
export class ProjService {

  constructor(private http:Http) { }

  getProjects(){
    
    return this.http.get("http://localhost:8081/project/getProjects").pipe(map((res:Response)=>res.json()));
    }

}
