import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproductss } from './iproductss';
import { IproductList } from './product-page/iproduct-list';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationService {
baseUrl:string = `http://localhost:5056/api/ProductList`
  constructor(private http : HttpClient) {

   } 
   GetAll():Observable<IproductList[]>{
    return this.http.get<IproductList[]>(`${this.baseUrl}`)
   } 
   GetById(id:string):Observable<IproductList> {
return this.http.get<IproductList>(`${this.baseUrl}/${id}`)

   } 
   Add(product:IproductList){
    return this.http.post<Iproductss>(`${this.baseUrl}`,product)
   } 

   Edit(id:number,product:IproductList){
    return this.http.put<IproductList>(`${this.baseUrl}/${id}`,product)
   } 
   Delete(id:number){
    return this.http.delete<IproductList>(`${this.baseUrl}/${id}`)
   }
   
}
