import {Component} from '@angular/core';

@Component({
    selector:'app-main',
    template:`
        <input #email (keyup.enter)="onKeyUp(email.value)" />
        <input (keyup.enter)="onKeyUpTeste($event)" />
    `
})
export class MainComponent{
    onKeyUp(email){
       console.log('Value: ' + email);
    }

    onKeyUpTeste($event){
        console.log('Value: ' + $event.target.value);
     }
}

/*
    Ambos tem o mesmo efeito porém através do Template Variable podemos capturar qualquer informação do elemento
*/
