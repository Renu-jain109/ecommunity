import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homelogin',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './homelogin.component.html',
  styleUrl: './homelogin.component.css'
})
export class HomeloginComponent implements OnInit {
  productForm : FormGroup;
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  userService = inject(UserService);

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productCode : '',
      productName : '',
      productBrand : ''
    })
  }

search(){
  const json = {
    name : this.productForm.get('productName').value,
    code : this.productForm.get('productCode').value,
    brand : this.productForm.get('productBrand').value
  }
  this.userService.searchProduct(json).subscribe((res : any)=>{
    console.log(res);
    
  })
  this.router.navigate(['/user/result']);
}

}
