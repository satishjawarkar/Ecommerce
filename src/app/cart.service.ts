import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>(""); 
  constructor() { 
    // loding checking time
    console.log('cardSerice Module Loaded')
  }
  // setproduct
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  // addtoCard methode
  addtoCart(product : any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  // totalprice methode 
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  // removeItem methode
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList)
  }
  // remecard
  removeAllcart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }
}


