import { Injectable } from '@angular/core';
import{Http,Headers,Response} from '@angular/http';
import{map} from 'rxjs/operators/map'
@Injectable()
export class AuthService {
  authToken: any;
user: any;
  constructor(private http: Http) { }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post('http://localhost:8081/user/authenticate', user, {headers: headers})
      .pipe(map((res:Response) => res.json()))
}
registerUser(user) {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  return this.http.post('http://localhost:8081/user/register', user, {headers: headers})
    .pipe(map((res:Response) => res.json()))
}
getProfile() {
  let headers = new Headers();
  this.loadToken();
  headers.append("Authorization", this.authToken);
  headers.append("Content-Type", "application/json");
  return this.http.get('http://localhost:8081/user/profile', {headers: headers})
    .pipe(map((res:Response) => res.json()))
}
storeUserData(token, user) {
  localStorage.setItem('id_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  this.authToken = token;
  this.user = user;
}

loadToken() {
  const token = localStorage.getItem('id_token');
  this.authToken = token;
}

deleteUser(id) {
  return this.http.delete('http://localhost:8081/delete/:' + id)
    .pipe(map((res:Response) => res.json()));
}
getUser(id){
  return this.http.get('http://localhost:8081/user/getUser/:'+id)
  .pipe(map((res:Response)=>res.json()));
}
logout() {
  this.authToken = null;
  this.user = null; 
  localStorage.clear();
}

}
