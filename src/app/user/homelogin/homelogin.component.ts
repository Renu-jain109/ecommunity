import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homelogin',
  standalone: true,
  imports: [],
  templateUrl: './homelogin.component.html',
  styleUrl: './homelogin.component.css'
})
export class HomeloginComponent implements OnInit {
  router = inject(Router);

  ngOnInit(): void {
  }

search(){
  this.router.navigate(['/user/result']);
}

}
