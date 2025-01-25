import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { CommonModule } from '@angular/common';
import { UserpipePipe } from '../userpipe.pipe';
import { AdminService } from '../admin/admin.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, UserpipePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  user: string;
  loggedIn: boolean = false;
  userService = inject(UserService);
  adminService = inject(AdminService);
  logginAdmin: boolean = false;

  adminUsername: string = localStorage.getItem("Admin Username");


  ngOnInit(): void {
    if (this.userService.isAuthenticated()) {
      this.loggedIn = true;
      this.getUserName();
    }

    if (this.adminUsername) {
      this.logginAdmin = true;
    }
  };

  getUserName() {
    let token = localStorage.getItem('token');
    this.userService.getUser(token).subscribe((res: any) => {
      this.user = res.username;
    })
  }

  logOut() {
    this.userService.logOut();
    localStorage.clear();
    this.loggedIn = false;
    window.location.href = "/";
  }

  logOutAdmin() {
    this.adminService.logOutAdimn();
    this.logginAdmin = false;
    window.location.href = "/";
  }

}
