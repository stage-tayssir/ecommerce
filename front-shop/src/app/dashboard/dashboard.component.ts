import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  car: any = [];
  searchText;
  p: number = 1;
  constructor(private api : ServiceService) {
    this.api.getAllcars();
   }

  ngOnInit() {

    this.getCars()
    
  }

  
  getCars = () => {
    this.api.getAllcars().subscribe(
      data =>{
        this.car = data;
      },
      error => {
        console.log('error refresh plz ');
      }
    );
  }


}
