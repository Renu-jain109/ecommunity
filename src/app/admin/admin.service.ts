import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { };

  loginAdmin(object : any){
    console.log(object);
    
   let params = new HttpParams();
   params = params.append('username',object.username);
   return this.http.get(environment.API_URL+"/getAdmin",{params});
  };

  logOutAdimn(){
    localStorage.removeItem("Admin Username");
  }
}
