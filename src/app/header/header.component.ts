import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { CommonModule } from '@angular/common';
import { HomeloginComponent } from '../user/homelogin/homelogin.component';
import { UserpipePipe } from '../userpipe.pipe';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, HomeloginComponent,UserpipePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  user: string;
  loggedIn: boolean = false;
  userService = inject(UserService);

  ngOnInit(): void {
    if (this.userService.isAuthenticated()) {
      this.loggedIn = true;
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        this.user = user.username;
      }
    }

  };

  logOut() {
    this.userService.logOut();
    this.loggedIn = false;
    window.location.href = "/";
  }

}
