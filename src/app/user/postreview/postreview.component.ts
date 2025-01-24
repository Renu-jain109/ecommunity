import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { RatingModule } from 'primeng/rating';
import { ReviewService } from '../../review.service';

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
  constructor(private fb: FormBuilder,
    private reviewService: ReviewService) { };

    reviewData = {
      heading : " ",
      description : " ",
      rating : null,
      // code : null
      };
    
  ngOnInit(): void {
    // const data = history.state.data;
    
    // if(data){
    //   this.reviewData.code = data;
     
    // }
  }


  submitReview() {

   const heading = this.reviewData.heading;
   const description = this.reviewData.description;
   const rating = this.reviewData.rating;    
    // const code = this.reviewData.code;
    
    
    this.reviewService.setReview(this.reviewData).subscribe((res : any)=>{
      console.log(res);
      
    })
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
