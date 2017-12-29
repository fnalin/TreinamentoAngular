import {Component} from '@angular/core';

@Component({
    selector:'xpto',
    template:`
        <input (keyup)="onKeyUp($event)" />
        <input (keyup.enter)="onKeyUp2()" />
    `
})
export class XPTOComponent{
    onKeyUp($event){
        if ($event.keyup === 13) console.log('ENTER was pressed');
    }

    onKeyUp2(){
       console.log('ENTER was pressed');
    }
}
