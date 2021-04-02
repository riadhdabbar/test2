import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProduitService } from '../produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {



  
  id?: any;
  product?: Product;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: ProduitService) { }

  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.get(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['products']);
  }

}
