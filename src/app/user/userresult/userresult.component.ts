import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userresult',
  standalone: true,
  imports: [CommonModule,CardModule,FormsModule,MatCardModule,RouterLink],
  templateUrl: './userresult.component.html',
  styleUrl: './userresult.component.css'
})
export class UserresultComponent implements OnInit {
  ngOnInit(): void {
  }

  value

  products : any = {}
}
