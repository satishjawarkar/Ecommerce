import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HeaderComponent } from '../header/header.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { custPipe } from '../cust.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    // HeaderComponent,
    FilterPipe,
    // custPipe
  
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
    
  ]
})
export class ProductsModule { }
