import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HomeloginComponent } from '../user/homelogin/homelogin.component';
import { UserService } from '../user/user.service';
import { FeaturedprductsComponent } from '../user/featuredprducts/featuredprducts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeloginComponent,CommonModule,FeaturedprductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loggedIn : boolean = false;
  userService = inject(UserService);

  ngOnInit(): void {
    if(this.userService.isAuthenticated()){
      this.loggedIn = true;
    }
  }

}
