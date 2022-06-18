import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products : any = [];
public grandTotal : number = 0;
  constructor(private cart :  CartService) {
    // loding checking time
    console.log('Card Module Loaded')
   }

  ngOnInit(): void {
    // getallProduct data
    this.cart.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cart.getTotalPrice();
    })
  }
  // card single item remove Methode
  removeItem(item:any){
    this.cart.removeCartItem(item);
  }
  // empty card methode
  emptycart(){
    this.cart.removeAllcart()
  }

}
