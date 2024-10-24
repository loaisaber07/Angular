import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scope-form',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './scope-form.component.html',
  styleUrl: './scope-form.component.css'
})
export class ScopeFormComponent { 
  ProductName:string = "" 
  UNitNo!:number  
  price!:number
    quantity!:number
  ExpireDate!:Date 

}
