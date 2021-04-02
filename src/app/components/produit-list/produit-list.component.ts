import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Product } from 'src/app/models/product.model';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  products?: Product[];
  currentTutorial?: Product;
  currentIndex = -1;
  title = '';



   nameSearch:string='';
   priceSearch:string='';
   categorieSearch:string='';

   items ?: Array<any>=[];
   productName: any;
   price: any;
   category: any;
   public page = 1;
  public pageSize =3;
 itemSize:number=0;

  constructor(private produitService: ProduitService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveTutorials();

  }


  Search() {
    if(this.productName =="") {
      this.ngOnInit();
    } else {
      this.productName.filter(res =>{
  
        return res.firstName.toLocaleLowerCase().match(this.price.toLocaleLowerCase())
      })
    }
  }
  
  SearchByPrice() {
    if(this.price =="") {
      this.ngOnInit();
    } else {
      this.price.filter(res =>{
  
        return res.firstName.toLocaleLowerCase().match(this.productName.toLocaleLowerCase())
      })
    }
  }

  SearchByCategories() {
    if(this.category =="") {
      this.ngOnInit();
    } else {
      this.category.filter(res =>{
  
        return res.firstName.toLocaleLowerCase().match(this.category.toLocaleLowerCase())
      })
    }
  }
  

  retrieveTutorials(): void {
    this.produitService.getAll()
      .subscribe(
        data => {
          this.products = data;
        //  this.itemSize=data.length
      //    console.log(data.length);

    
  
   
    
    
  


        },
        error => {
      //    console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Product, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;

    this.produitService.findByTitle(this.title)
      .subscribe(
        data => {
          this.products = data;
          //console.log(data);
        },
        error => {
        //  console.log(error);
        });
  }


  employeeDetails(id: any){
    this.router.navigate(['productsDetails', id]);
  }






}
