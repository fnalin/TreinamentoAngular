import {Component} from '@angular/core';

@Component({
    selector:'xpto',
    template:`
        <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        
    `
})
export class XPTOComponent{
    email = "me@example.com";
    
    onKeyUp(){
       console.log('Value: ' + this.email);
    }

}

/*
    Banana in the box [()]

    Para usar o 2 way binding é necessário importar o módulo FormsModule de '@angular/forms':
    import { FormsModule } from '@angular/forms';
*/
