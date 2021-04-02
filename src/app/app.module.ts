import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { JwPaginationComponent } from 'jw-angular-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FilterpricePipe } from './components/filter/filterprice.pipe';
import { FiltercategoriePipe } from './components/filter/filtercategorie.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,

    ProduitDetailComponent,
    ProduitListComponent,

    FilterpricePipe,
    FiltercategoriePipe,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule

    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
