import {Component} from '@angular/core';

@Component({
    selector:'app-main',
    template:`
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})
export class MainComponent{
    isActive = false;
}
