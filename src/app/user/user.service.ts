import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:8086";

  constructor(private http: HttpClient) { }

  ragistration(object: any): Observable<any> {
    return this.http.post(environment.API_URL + "/register", object);
  };

  login(object: any) {
    localStorage.setItem("token", object);
    return true;
  };

  generateToken(object: any): Observable<any> {
    return this.http.post(environment.API_URL + "/token", object)
  };

  getToken() {
    return localStorage.getItem('token');
  };

  getUser(token: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('token', token);
    return this.http.get(environment.API_URL + "/getUserName", { params });
  };

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  };

  logOut() {
    localStorage.removeItem("token");
  };

  addProduct(object: any): Observable<any> {
    return this.http.post(`${this.url}/addproduct`, object);
  };

  searchProduct(object: any): Observable<any> {
    let params = new HttpParams();
    if (object.code) {
      params = params.append('code', object.code);
    }
    if (object.name) {
      params = params.append('name', object.name);
    }
    if (object.brand) {
      params = params.append('brand', object.brand);
    }
    return this.http.get(environment.API_URL + "/getproduct", { params });
  };


  getAllData(): Observable<any> {
    return this.http.get(environment.API_URL + "/getalldata");
  };

  getProductCount(): Observable<any> {
    return this.http.get(environment.API_URL + "/getproductcount");
  };

  getCountUser(): Observable<any> {
    return this.http.get(environment.API_URL + "/get");
  };
  getreviewcount(): Observable<any> {
    return this.http.get(environment.API_URL + "/getreviewcount");
  };
}
