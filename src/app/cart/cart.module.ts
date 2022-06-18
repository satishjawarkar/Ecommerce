import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { HeaderComponent } from '../header/header.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { custPipe } from '../cust.pipe';



@NgModule({
  declarations: [
    CartComponent,
    // HeaderComponent,
    // FilterPipe,
    // custPipe
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class CartModule { }
