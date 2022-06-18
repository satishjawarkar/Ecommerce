import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productList : any;
public searchKey:string = "";
  constructor(private api :ApiService, private cart : CartService) {
    // loading checking time
    console.log('Product Module Loaded')
   }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price}); 
      });
    });

    this.cart.search.subscribe((val:any)=>{
      this.searchKey = val;

    });
  }
  addtoCart(item: any){
    this.cart.addtoCart(item);
    console.log('addtoCart');
}
}
