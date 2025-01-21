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

  allProducts : any ;


  ngOnInit(): void {
    if (this.userService.isAuthenticated()) {
      this.loggedIn = true;
    }
    this.productForm = this.formBuilder.group({
      productCode: '',
      productName: '',
      productBrand: ''
    })
    this.userService.getAllData().subscribe((res : any)=>{
      console.log(res);
      this.allProducts = res;

    })

  };


  search() {
    const json = {
      name: this.productForm.get('productName').value,
      code: this.productForm.get('productCode').value,
      brand: this.productForm.get('productBrand').value
    }
    this.userService.searchProduct(json).subscribe((res: any) => {
      console.log(res);

      if (!json.name && !json.code && !json.brand) {
        this.toastr.error("At least one field is compulsory.");
        return;
      };
  
      this.router.navigate(['/user/result'], { state: { data: res } });
    });   

  }

}

