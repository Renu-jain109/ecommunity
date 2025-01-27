import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { ReviewService } from '../../review.service';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [MatTableModule,MatButtonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  reviewService = inject(ReviewService);
  resultList : any = [];
  status : any = false;
  adminService = inject(AdminService);
  reviewData : any;


  ngOnInit(): void {
    this.getByStatus(this.status);

    }

  getByStatus(status : any){
    this.reviewService.getByStatus(status).subscribe((res:any)=>{
      console.log(res);
      
      this.resultList = res;      
    });
  };

  

  approveReview(reviewData : any){           
    console.log(reviewData);   

    reviewData.status = true; 

    this.adminService.approveReview(reviewData).subscribe((res:any)=>{
      console.log(res);
      
    })
  };

  deleteReview(id : any){
    
    this.adminService.deleteReview(id).subscribe((res:any)=>{
      console.log(res);  
      
    })
    
  }

}
