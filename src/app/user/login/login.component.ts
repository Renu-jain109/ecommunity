import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { state } from '@angular/animations';
import { AlphabetdirectiveDirective } from '../../directive/only-alphabet/alphabetdirective.directive';
import { PassworddirectiveDirective } from '../../directive/only-password/passworddirective.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AlphabetdirectiveDirective, PassworddirectiveDirective, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userService = inject(UserService);
  loginForm: FormGroup;
  formBuilder = inject(FormBuilder);
  toastr = inject(ToastrService);
  router = inject(Router);
  isPasswordVisible: boolean = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, new PassworddirectiveDirective().validate]],
    });
  };

  onLogin() {
    const json = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
    };
    this.userService.generateToken(json).subscribe((res: any) => {
      this.userService.login(res.jwtToken);
      this.toastr.success("Login Successfully");
      window.location.href = '/';
    },
      (error) => {
        this.toastr.error("Invalid Login User");
      }
    )
  };

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  };

  reset() {
    this.loginForm.reset();
  }

}
