import { Component } from '@angular/core';
import { MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [MatTableModule,],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  resultList : any = [];
}
