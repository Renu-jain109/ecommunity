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
  reviewData: any = [];
  rating: number = 0;
  reviewCount: number = 0;
  isToggled: boolean = false;
  divShowHide: boolean = false;


  ngOnInit(): void {
    this.product = history.state.data;
    this.getReview();
    this.getReviewCount();

    this.reviewService.getSumRatings(this.product.code).subscribe((res: any) => {
      this.rating = res;
    });
  };

  addReview() {
    this.router.navigate(['/user/postreview'], { state: { data: this.product.code } });
  }

  getReview() {
    const code = this.product.code;
    this.reviewService.getReview(code).subscribe((res: any) => {
      this.reviewData = res;
    })
  };

  getReviewCount() {
    this.reviewService.getReviewCount(this.product.code).subscribe((res: any) => {
      this.reviewCount = res;
    })
  };

  toggleState() {
    this.isToggled = !this.isToggled;

  };

}
