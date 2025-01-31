import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { AlphabetdirectiveDirective } from '../../directive/only-alphabet/alphabetdirective.directive';
import { PassworddirectiveDirective } from '../../directive/only-password/passworddirective.directive';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink, AlphabetdirectiveDirective, PassworddirectiveDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formBuilder = inject(FormBuilder);
  registerService = inject(UserService);
  toastr = inject(ToastrService);
  isPasswordVisible: boolean = false;
  isConformPasswordVisible: boolean = false;


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, new PassworddirectiveDirective().validate]],
      confirmPassword: ['', [Validators.required, new PassworddirectiveDirective().validate]]
    });
  };

  submit() {
    let json = {
      username: this.registerForm.get('username').value,
      firstname: this.registerForm.get('firstName').value,
      lastname: this.registerForm.get('lastName').value,
      password: this.registerForm.get('password').value,
      confirmpassword: this.registerForm.get('confirmPassword').value,
    };
    this.registerService.ragistration(json).subscribe((res: any) => {

      if (json.password !== json.confirmpassword) {
        this.toastr.error("Password not Match");
        return;
      }

      if (!this.registerForm.valid) {
        this.toastr.error("Please all fields required");
        return;
      }
      this.toastr.success("Registration successfully");
      this.registerForm.reset();
    },
      error => {
        this.toastr.error("Registration faild");
      }
    );
  };


  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  };
  toggleConformPasswordVisibility() {
    this.isConformPasswordVisible = !this.isConformPasswordVisible;
  };

  reset() {
    this.registerForm.reset();
  }

}
