import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { verifyHostBindings, createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  accessoires= [
    {
      nom: 'test',
      img_urle:'test',
      prix:0
    }];
  constructor( private cart :CartService,
    private router: Router) { }
    totale=0;
  ngOnInit() {
    this.accessoires=this.cart.getAll();
    this.verify();
    this.calculer();

    }
  

  verify(){
    if(this.accessoires.length==0){
      this.router.navigate(['/access']);
  }
  }

  calculer(){
    for(let a of this.accessoires){
      this.totale+=a.prix;
    }

  }



  Annuler(c){
    this.totale-=c.prix;
    this.cart.delete(c); 
    this.verify();
  }


}