import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit {
  addProductForm : FormGroup;
  Fb = inject(FormBuilder);
  router = inject(Router);
  userService = inject(UserService);
  toastr = inject(ToastrService);

  ngOnInit(): void {
    this.addProductForm = this.Fb.group({
      productname : ['',Validators.required],
      productbrand : ['',Validators.required],
      productcode : ['',Validators.required],
      productdescription : ['',Validators.required],
      productimagelink : ['',Validators.required],
    })

  }

  submit(){
    const json = {
      name : this.addProductForm.get('productname').value,
      brand : this.addProductForm.get('productbrand').value,
      code : this.addProductForm.get('productcode').value,
      description : this.addProductForm.get('productdescription').value,
      image : this.addProductForm.get('productimagelink').value,
    }

this.userService.addProductService(json).subscribe((res : any)=>{
  console.log(res);
  this.toastr.success("Add Product Successfully");
  
},
(error)=>{
  this.toastr.error("Product not Save");
  console.log(error);
  
}
)

  //   this.userService.addProductService(json).subscribe((res : any)=>{
  //     console.log(res);
  //     this.toastr.success("Add Product Successfully");
      
  //   },
  //   (error)=>{
  //     this.toastr.error("Product not Save");
  //     console.log(error);
      

  //   }
  // )
    // this.router.navigate(['/user/review']);
  }
}
