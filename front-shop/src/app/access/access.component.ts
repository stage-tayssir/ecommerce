import { Component, OnInit } from '@angular/core';
import { AccessoiresService } from '../accessoires.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  accessoires= [{marque: 'test'}];

  constructor(private api:AccessoiresService,
    private cart :CartService){
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
  addAccess (a){
    this.cart.addAccess(a);
   console.log( this.cart.getAll());
  }


  
}

