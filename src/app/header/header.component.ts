import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
     public totalItem : number = 0;
     public searchTerm  : any ='';
  constructor(private cart :CartService) { 
    // loding checking time
    console.log('Header Modul Loaded')
  }

  ngOnInit(): void {
    this.cart.getProducts()
     .subscribe(res=>{
      this.totalItem = res.length;

    });
    
  }
  search(event:any){
   this.searchTerm = (event.target as HTMLInputElement).value;
   console.log(this.searchTerm);
   this.cart.search.next(this.searchTerm);
 }

}
