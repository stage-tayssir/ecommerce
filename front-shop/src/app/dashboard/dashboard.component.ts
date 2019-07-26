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

  selectedLevel;
  sortby:Array<Object> = [
      {id: 0, name: "modele",value:"modele"},
      {id: 1, name: "prix croi",value:"id"},
      {id: 2, name: "prix decr",value:"-id"}

  ];


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

order :string = "marque";


selected(){
    
   switch(this.selectedLevel.id) { 
   case 0: { 
      this.order =  this.selectedLevel.value; 
      break; 
   } 
   case 1: { 
    this.order =  this.selectedLevel.value; 
      break; 
   } 
   case 2: {
    this.order =  this.selectedLevel.value;
      break;    
}
    console.log(this.selectedLevel);
  }

}

}