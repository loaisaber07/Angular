import { Component, OnInit } from '@angular/core';
import { SignalRForChatService } from '../signal-rfor-chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-chat',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './display-chat.component.html',
  styleUrl: './display-chat.component.css'
})
export class DisplayChatComponent implements OnInit {
userName: string = ''; 
message:string = '';
constructor(public chat: SignalRForChatService) {
}

ngOnInit(): void {
  this.chat.startConnection();
} 
public sendMessage(userName: string, message: string): void {
  this.chat.sendMessage(userName, message);
}
  

}
