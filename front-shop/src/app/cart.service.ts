import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  accessoires =[];
  constructor() { }
  ngOnInit(){
  this.accessoires = [
    {
        id : -1,
        nom : '',
        img_urle :'',
        prix :0
      
    }
  ]
}

addAccess(accessoire){
  this.accessoires.push(accessoire);
}

getAll(){
  return (this.accessoires);
}


}
