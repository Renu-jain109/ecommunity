import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit {
  adminLoginForm : FormGroup;
  Fb = inject(FormBuilder);

  ngOnInit(): void {
    this.adminLoginForm = this.Fb.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
    });
  }

  submit(){
    const json = {
      username : this.adminLoginForm.get('username').value,
      password : this.adminLoginForm.get('password').value
    }
  }

}
