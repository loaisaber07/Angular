import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproductss } from './iproductss';
import { IScopeAgency } from '../iscope-agency';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationService {
baseUrl:string = `http://localhost:5056/swagger/index.html`
  constructor(private http : HttpClient) {

   } 
   GetAll():Observable<IScopeAgency[]>{
    return this.http.get<IScopeAgency[]>(`${this.baseUrl}`)
   } 
 
   Add(product:IScopeAgency){
    return this.http.post<IScopeAgency>(`${this.baseUrl}`,product)
   } 

   
   Delete(id:number){
    return this.http.delete<IScopeAgency>(`${this.baseUrl}/${id}`)
   }
   
}
