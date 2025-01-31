import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReviewService } from '../../review.service';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  reviewService = inject(ReviewService);
  resultList: any = [];
  status: any = false;
  adminService = inject(AdminService);
  toastr = inject(ToastrService);

  ngOnInit(): void {
    this.getByStatus(this.status);

  }

  getByStatus(status: any) {
    this.reviewService.getByStatus(status).subscribe((res: any) => {
      this.resultList = res;
    });
  };

  approveReview(reviewData: any) {
    reviewData.status = true;
    this.adminService.approveReview(reviewData).subscribe((res: any) => {

      this.toastr.success("You have approved");
      this.reloadWindow();
    }, (error) => {
      this.toastr.error("You have not approved");
    })
  };

  deleteReview(id: any) {
    this.adminService.deleteReview(id).subscribe((res: any) => {
      console.log(res);
      this.toastr.success("You have deleted");
      this.reloadWindow();
    },
      (error) => {
        this.toastr.error("You have not deleted");
      })
  };

  reloadWindow() {
    setInterval(() => {
      location.reload();
    }, 1000);
  };
}
