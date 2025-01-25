import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RatingModule } from 'primeng/rating';
import { ReviewService } from '../../review.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-postreview',
  standalone: true,
  imports: [FormsModule, RatingModule,CommonModule],
  templateUrl: './postreview.component.html',
  styleUrl: './postreview.component.css'
})
export class PostreviewComponent implements OnInit {
  toastr = inject(ToastrService);
  router = inject(Router);
  userService = inject(UserService);
  constructor(private fb: FormBuilder,
    private reviewService: ReviewService) { };

    reviewData = {
      heading : " ",
      description : " ",
      rating : null,
      code : '',
      username : '',
      status : false
      };
    
  ngOnInit(): void {
    this.getUserName();
    const data = history.state.data;
    
    if(data){
      this.reviewData.code = data;     
    }
  }
  getUserName(){
    let token = localStorage.getItem('token');
    this.userService.getUser(token).subscribe((res : any)=>{
      
      this.reviewData.username = res.username;      
    })
  }


  submitReview() {    
    
    this.reviewService.setReview(this.reviewData).subscribe((res : any)=>{

      this.toastr.success("Review added successfully");
      this.setDelay()
    },
    (error)=>{
      this.toastr.error("Review not added");
    }
  )
    }

    setDelay(){
      setInterval(()=>{
        location.reload();
      },2000);
    }


  // submitReview(){

  //   if(!this.form.heading || !this.form.review){
  //     this.toastr.error("All Fields Required.")
  //     return;
  //   }
  //   console.log(this.form);
  // }

  // starWidth: number = 0;

  // rateProduct(rateValue: number) {
  //   this.starWidth = rateValue * 75 / 5;
  // }

  
}
