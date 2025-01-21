import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit {
  addProductForm: FormGroup;
  Fb = inject(FormBuilder);
  router = inject(Router);
  userService = inject(UserService);
  toastr = inject(ToastrService);
  productArr: any[] = [];


  ngOnInit(): void {
    this.addProductForm = this.Fb.group({
      productname: ['', Validators.required],
      productbrand: ['', Validators.required],
      productcode: ['', Validators.required],
      productdescription: ['', Validators.required],
      productimagelink: ['', Validators.required],
    })

  }

  submit() {
    const json = {
      name: this.addProductForm.get('productname').value,
      brand: this.addProductForm.get('productbrand').value,
      code: this.addProductForm.get('productcode').value,
      description: this.addProductForm.get('productdescription').value,
      image: this.addProductForm.get('productimagelink').value,
    }

    this.userService.addProduct(json).subscribe((res: any) => {
      console.log(res);

      if (this.addProductForm.invalid) {
        this.toastr.error("All Fields Required.");
        return;
      }
      this.productArr.push(res);
      this.toastr.success("Add Product Successfully");
      console.log(this.router.navigate(['/user/result'], { state: { data: this.productArr } }));


    },
      (error) => {
        this.toastr.error("Product not Save");
        console.log(error);

      })
  };
  reset(){
    this.addProductForm.reset();
  }
}
