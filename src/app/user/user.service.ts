import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  ragistration (object : any) : Observable <any>{
    return this.http.post(environment.API_URL+"/register",object);

  };

  login(object : any) {
    localStorage.setItem("token",object);
    return true;
  };

  generateToken (object : any) : Observable <any>{
    return this.http.post(environment.API_URL+"/token",object)
  };
  isAuthenticated() : boolean{
    return !!localStorage.getItem("token");
  };
  logOut(){
    localStorage.removeItem("token");
  }
}
