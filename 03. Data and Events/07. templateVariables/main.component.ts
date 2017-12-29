import {Component} from '@angular/core';

@Component({
    selector:'xpto',
    template:`
        <input #email (keyup.enter)="onKeyUp(email.value)" />
        <input (keyup.enter)="onKeyUpTeste($event)" />
    `
})
export class XPTOComponent{
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
