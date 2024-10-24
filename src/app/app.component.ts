import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { DisplayChatComponent } from './ChatHub/display-chat/display-chat.component';
import { ScopeAgencyComponent } from './ScopeAgency/scope-agency/scope-agency.component';
import { ScopeFormComponent } from './InvoiceForm/scope-form/scope-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [   DisplayChatComponent , ScopeAgencyComponent,ScopeFormComponent
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
