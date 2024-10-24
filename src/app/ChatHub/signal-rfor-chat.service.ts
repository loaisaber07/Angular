import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRForChatService { 
  public message : string[] = []  ; 
private hubConnection!: signalR.HubConnection;
  constructor() { } 

  public startConnection():void  {

    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7052/chatHub')
      .build(); 
      this.hubConnection.start().then(() =>
         console.log('Connection started!'))
      .catch(err => console.log('Error while starting connection: ' + err));; 
      this.hubConnection.on('ReceiveMessage', (user: string, message: string) => {
        this.message.push(`${user}: ${message}`);
      }) ;  
      this.hubConnection.on('RecieveGroupMessage' , 
        (message:string)=>{
this.message.push(message) ; 

        }
      ) ; 
      this.hubConnection.on('MessageGroup' , 
        (groupname:string , connectioId:string)=>{
this.message.push(`${groupname} : ${connectioId}`) ;

        }
      )
  } 
  public sendMessage(userName: string, message: string): void {
    this.hubConnection
      .invoke('SendMessage', userName, message)
      .catch(err => console.error(err));
  } 
  public joinGroup(groupname:string):void
  {
this.hubConnection.invoke('AddToGroup' , groupname) ;
  } 
  public sendMessageToGroup(groupname:string , message:string):void
  {
    this.hubConnection.invoke('sendMessageToSpecificGroup' , groupname , message);
  }
}
