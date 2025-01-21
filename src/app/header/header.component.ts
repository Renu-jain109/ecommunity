import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { CommonModule } from '@angular/common';
import { UserpipePipe } from '../userpipe.pipe';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule,UserpipePipe],
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
      this.user = localStorage.getItem('username');
    }

  };

  logOut() {
    this.userService.logOut();
    localStorage.clear();
    this.loggedIn = false;
    window.location.href = "/";
  }

}
