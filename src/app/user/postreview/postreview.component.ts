import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-postreview',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './postreview.component.html',
  styleUrl: './postreview.component.css'
})
export class PostreviewComponent implements OnInit {
  toastr = inject(ToastrService);
  router = inject(Router);
  reviewForm : FormGroup;
  userService = inject(UserService);
  constructor(private fb : FormBuilder){};


  // form = {
  // heading :  "",
  // review : "",
  // };

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      heading : ['',Validators.required],
      review : ['',Validators.required]
    })
    
  }

  submitReview(){
    const json = {
      heading : this.reviewForm.get("heading").value,
      review : this.reviewForm.get("review").value,
    }
    this.userService.setReview(json).subscribe((res : any)=>{
      console.log(res);
      
    })
  }
  
// submitReview(){

//   if(!this.form.heading || !this.form.review){
//     this.toastr.error("All Fields Required.")
//     return;
//   }
//   console.log(this.form);
  // }
}
