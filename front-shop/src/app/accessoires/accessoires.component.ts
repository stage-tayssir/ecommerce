import { Component, OnInit } from '@angular/core';
import { ApiAcessService } from '../api-acess.service';

@Component({
  selector: 'app-accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.css']
})
export class AccessoiresComponent implements OnInit {
  accessoires= [{marque: 'test'}];

  constructor(private api:ApiAcessService){
    this.getAccessoires();
   }
   ngOnInit() {
  }



 
   getAccessoires = () => {
    this.api.getAllAccessoire().subscribe(
    data => {
      this.accessoires =data;  
    },
    error =>{
        console.log(error);
    }
    );
  }


  
}
