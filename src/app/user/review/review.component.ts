import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../../review.service';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {

  product: any;
  router = inject(Router);
  reviewService = inject(ReviewService)

  ngOnInit(): void {
    this.product = history.state.data;
    console.log(this.product);
    this.getReview()
  }

  addReview() {
    this.router.navigate(['/user/postreview'],{state : {data:this.product.code}});
  }

  getReview(){
    const code = this.product.code;
    this.reviewService.getReview(code).subscribe((res :any)=>{
      console.log(res);
      
    })
  }


}
