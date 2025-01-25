import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { ReviewService } from '../../review.service';


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

  ngOnInit(): void {
    this.getByStatus("approved");
    }

  getByStatus(status : any){
    this.reviewService.getByStatus(status).subscribe((res:any)=>{
      console.log(res);
      
    })
  }

}
