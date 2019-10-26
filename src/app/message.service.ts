import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class MessageService{
    messages: string[] = ["Hi Ross", "Hello there children"];
    
    add(message: string){
    this.messages.push(message);
    }
    
    clear(){
        this.messages = [];
    }
}
 