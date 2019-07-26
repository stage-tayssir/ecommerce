import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  accessoires= [{marque: 'test'}];
  constructor( private cart :CartService) { }

  ngOnInit() {
    this.accessoires=this.cart.getAll();
  }

  

}
