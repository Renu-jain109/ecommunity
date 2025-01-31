import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-userresult',
  standalone: true,
  imports: [CommonModule, CardModule, FormsModule, MatCardModule, RouterLink],
  templateUrl: './userresult.component.html',
  styleUrl: './userresult.component.css'
})
export class UserresultComponent implements OnInit {
  productData: any;
  constructor(private router: Router) { }
  dropDown = { value: 'name' };

  ngOnInit(): void {
    this.productData = history.state.data;
    // console.log(this.productData);      
  }

  explore(product: any) {
    this.router.navigate(['/user/review'], { state: { data: product } });
  }

  applyFilter() {
    let currentValue = this.dropDown.value;

    if (currentValue === 'name') {
      this.productData = this.productData.sort((a: { name: string }, b: { name: string }) => {
        if (a.name > b.name) {
          return 1;
        } if (a.name < b.name) {
          return -1;
        } return 0;
      })
    } else if (currentValue === 'code') {
      this.productData = this.productData.sort((a: { code: string }, b: { code: string }) => {
        if (a.code > b.code) {
          return 1;
        } if (a.code < b.code) {
          return -1;
        } return 0;
      })
    } 
    // else if (currentValue === 'brand') {
    //   this.productData = this.productData.sort((a: { brand: string }, b: { brand: string }) => {
    //     if (a.brand > b.brand) {
    //       return 1;
    //     } if (a.brand < b.brand) {
    //       return -1;
    //     } return 0;
    //   })
    // }
  }
}
