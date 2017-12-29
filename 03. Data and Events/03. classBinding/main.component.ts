import {Component} from '@angular/core';

@Component({
    selector:'xpto',
    template:`
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class XPTOComponent{
    isActive = true;
}