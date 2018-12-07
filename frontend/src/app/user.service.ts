import { Injectable } from '@angular/core';
import{Http,Headers,Response} from '@angular/http';
import {map} from 'rxjs/operators/map';

@Injectable()
export class UserService {

  constructor(private http:Http) { }
  voteProject(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post('http://localhost:8081/user/vote', user, {headers: headers})
      .pipe(map((res:Response) => res.json()))
  }

  fundProject(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post('http://localhost:8081/user/sponsor', user, {headers: headers})
      .pipe(map((res:Response) => res.json()))
  }

}
