import {Component} from '@angular/core';

@Component({
    selector:'app-main',
    template:`
        <input (keyup)="onKeyUp($event)" />
        <input (keyup.enter)="onKeyUp2()" />
    `
})
export class MainComponent{
    onKeyUp($event){
        //console.log($event);
        if ($event.keyCode === 13) console.log('ENTER was pressed');
    }

    onKeyUp2(){
       console.log('ENTER was pressed');
    }
}
