import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
 
  { path: 'products', component: ProduitListComponent },
  { path: 'productsDetails/:id', component: ProduitDetailComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
