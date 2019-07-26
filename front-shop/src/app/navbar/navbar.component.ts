import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  number=0;
  constructor(private cart: CartService) { }


  ngOnInit() {
    const counter =interval(1000);
    counter.subscribe(
      val =>{
        this.number=this.cart.accessoires.length;
      }
    )
  }
}
