import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {

  product : any ;
  router = inject(Router);

  ngOnInit(): void {
 this.product = history.state.data;
 console.log(this.product);

 

  }

  review(){
    this.router.navigate(['/user/postreview']);
  }

}
