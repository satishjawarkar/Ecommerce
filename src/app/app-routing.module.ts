import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
// Routing
const routes: Routes = [
  // {path:'header',component:HeaderComponent},
  {path:'',loadChildren:()=>import('./products/products.module').then(mod=>mod.ProductsModule)},
  {path:'product',loadChildren:()=>import('./products/products.module').then(mod=>mod.ProductsModule)},
  {path:'cart',loadChildren:()=>import('./cart/cart.module').then(mod=>mod.CartModule)},
  {path:'aboutus',loadChildren:()=>import('./aboutus/aboutus.module').then(mod=>mod.AboutusModule)},
  {path:'contactus',loadChildren:()=>import('./contact/contact.module').then(mod=>mod.ContactModule)}
  // loadChildren: () => import('./auth/auth.module').then(mod=>mod.AuthModule)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
