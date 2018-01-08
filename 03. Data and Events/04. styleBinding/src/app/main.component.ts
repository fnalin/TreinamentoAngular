import {Component} from '@angular/core';

@Component({
    selector:'app-main',
    template:`
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    `
})
export class MainComponent{
    isActive = true;
}

/*
https://www.w3schools.com/jsref/dom_obj_style.asp
 */
