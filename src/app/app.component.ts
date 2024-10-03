import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { ProductPageComponent } from './Lab5/product-page/product-page.component';
import { DisplayChatComponent } from './ChatHub/display-chat/display-chat.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductPageComponent , DisplayChatComponent
  ] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'lab1'; 
  navigate:string="" ; 
  Navigate(event:string){
    this.navigate = event ;
  } 

}
