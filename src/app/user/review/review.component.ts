import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {

  router = inject(Router);
  ngOnInit(): void {
  }

  review(){
    this.router.navigate(['/user/postreview']);
  }

}
