import { Component, OnInit } from '@angular/core';
import { Iproductss } from '../iproductss';
import { CrudOperationService } from '../crud-operation.service';
import { Router } from '@angular/router';
import { IproductList } from './iproduct-list';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  products:IproductList[]=[]  ;
 constructor(private service:CrudOperationService , private route:Router){}
  ngOnInit(): void {
 
    this.service.GetAll().subscribe(data=>{
      this.products=data ; 
      console.log(data)
    })
 } 
 edit(id:number){
this.route.navigate(['editProduct',id]) ;
 } 
 Delete(id:number){
  this.service.Delete(id).subscribe(data=>{
  this.products = this.products.filter(s=>s.id != id);
  }) ;
 } 
}
