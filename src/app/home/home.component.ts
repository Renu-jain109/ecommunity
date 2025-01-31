import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  toastr = inject(ToastrService);
  userService = inject(UserService);
  productForm: FormGroup;
  loggedIn: boolean = false;
  allProducts: any;
  productsCount: number;
  reviewcount: number;
  countUser: number;

  ngOnInit(): void {
    if (this.userService.isAuthenticated()) {
      this.loggedIn = true;
    }
    this.productForm = this.formBuilder.group({
      productCode: '',
      productName: '',
      productBrand: ''
    })
    this.userService.getAllData().subscribe((res: any) => {
      this.allProducts = res;
    })
    this.getProductCount();
    this.getCountUser();
    this.getreviewcount();

  };


  search() {
    const json = {
      name: this.productForm.get('productName').value,
      code: this.productForm.get('productCode').value,
      brand: this.productForm.get('productBrand').value
    }
    this.userService.searchProduct(json).subscribe((res: any) => {

      if (!json.name && !json.code && !json.brand) {
        this.toastr.error("At least one field is compulsory.");
        return;
      };
      this.router.navigate(['/user/result'], { state: { data: res } });
    });

  };

  explore(products: any) {
    this.router.navigate(['/user/review'], { state: { data: products } });
  };

  getProductCount() {
    this.userService.getProductCount().subscribe((res: any) => {
      this.productsCount = res;
    })
  };
  getCountUser() {
    this.userService.getCountUser().subscribe((res: any) => {
      this.countUser = res;
    })
  }
  getreviewcount() {
    this.userService.getreviewcount().subscribe((res: any) => {
      this.reviewcount = res;
    })
  }

}

