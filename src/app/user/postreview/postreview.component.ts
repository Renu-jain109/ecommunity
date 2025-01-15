import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postreview',
  standalone: true,
  imports: [],
  templateUrl: './postreview.component.html',
  styleUrl: './postreview.component.css'
})
export class PostreviewComponent implements OnInit {

  router = inject(Router);
  ngOnInit(): void {
  }
  

}
