import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userService = inject(UserService);
  loginForm : FormGroup;
  formBuilder = inject(FormBuilder);
  tostr = inject (ToastrService);
  router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['',Validators.required],
      password : ['',Validators.required],

    });
  };

  onLogin(){
    const json = {
      username : this.loginForm.get('username')?.value,
      password : this.loginForm.get('password')?.value,
    };
    this.userService.generateToken(json).subscribe((res : any)=>{
      console.log(res);    
        this.userService.login(res.jwtToken);
        localStorage.setItem('user',JSON.stringify(json));

      this.tostr.success("Login Successfully");
       window.location.href='/';

    },
    (error)=>{
      this.tostr.error("Invalid Login User");
    }
  )
  };

  resetPasword(){
  }

  reset(){
    this.loginForm.reset();
  }

}
