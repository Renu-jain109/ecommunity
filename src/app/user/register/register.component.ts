import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  formBuilder = inject(FormBuilder);
  registerService = inject(UserService);
  tostr =inject(ToastrService);

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username : ['',Validators.required],
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required]
    });
  };

  submit (){
    let json = {
      username : this.registerForm.get('username').value,
      firstname : this.registerForm.get('firstName').value,
      lastname : this.registerForm.get('lastName').value,
      password : this.registerForm.get('password').value,
      confirmpassword : this.registerForm.get('confirmPassword').value,
    };
    this.registerService.ragistration(json).subscribe((res : any)=>{
      console.log(res);
      this.tostr.success("Registration successfully");
      this.registerForm.reset();

      
    },
  error=>{
    this.tostr.error("Registration faild");
  }
  );
    
  }

}
