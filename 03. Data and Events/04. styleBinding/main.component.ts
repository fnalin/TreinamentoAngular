import {Component} from '@angular/core';

@Component({
    selector:'xpto',
    template:`
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    `
})
export class XPTOComponent{
    isActive = true;
}

/*
https://www.w3schools.com/jsref/dom_obj_style.asp
 */
