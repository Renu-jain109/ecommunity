import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http : HttpClient) { }

  setReview(reviewData : any){
    return this.http.post(environment.API_URL+"/setreview",reviewData);
  };

  getReview(code: any):Observable<any>{
    let params = new HttpParams();
    params = params.append('code',code);
    return this.http.get(environment.API_URL+"/getreview",{params});
  };

  getSumRatings(code:any){
    let params = new HttpParams();
    params = params.append('code',code);
    return this.http.get(environment.API_URL+"/getratings",{params});
  };

  getReviewStats(){
    return this.http.get(environment.API_URL+"/getreviewcount");
  }

  getReviewCount(code:any){
    let params = new HttpParams();
    params = params.append('code',code);
    return this.http.get(environment.API_URL+"/getcodecount",{params})
  };

  getByStatus(status : any){
    let params = new HttpParams();
    params = params.append("status",status);
    return this.http.get(environment.API_URL+"/getbystatus",{params})
  }
  
}
