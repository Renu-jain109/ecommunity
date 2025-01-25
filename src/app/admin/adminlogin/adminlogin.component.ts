import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit {
  adminLoginForm: FormGroup;
  Fb = inject(FormBuilder);
  adminService = inject(AdminService);
  router = inject(Router);
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.adminLoginForm = this.Fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const json = {
      username: this.adminLoginForm.get('username').value,
      password: this.adminLoginForm.get('password').value
    }

    this.adminService.loginAdmin(json).subscribe((res: any) => {
      if (res) {
        this.toastr.success("You are logging");
        localStorage.setItem('Admin Username', res.username);
        window.location.href = "/admin/result";
      }
    })
  }

}
