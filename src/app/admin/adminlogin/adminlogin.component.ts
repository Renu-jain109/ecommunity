import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AlphabetdirectiveDirective } from '../../directive/only-alphabet/alphabetdirective.directive';
import { PassworddirectiveDirective } from '../../directive/only-password/passworddirective.directive';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, AlphabetdirectiveDirective, PassworddirectiveDirective],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit {
  adminLoginForm: FormGroup;
  Fb = inject(FormBuilder);
  adminService = inject(AdminService);
  router = inject(Router);
  constructor(private toastr: ToastrService) { }
  isPasswordVisible: boolean = false;


  ngOnInit(): void {
    this.adminLoginForm = this.Fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, new PassworddirectiveDirective().validate]]
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
  };

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  };

  reset() {
    this.adminLoginForm.reset();
  };

}
