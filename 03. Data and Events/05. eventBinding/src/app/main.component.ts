import {Component} from '@angular/core';

@Component({
    selector:'app-main',
    template:`
        <button (click)="onSave()">Save</button>
        <div (click)="onDivClicked()">
            <button (click)="onSave2($event)">Save</button>
        </div>
    `
})
export class MainComponent{
    onSave(){
        console.log('Button was clicked');
    }

    onSave2($event){
        $event.stopPropagation(); //desativar bubbling e não disparar o envento click da div
        console.log('Button 2 was clicked', $event);
    }

    onDivClicked(){
        console.log('Div was clicked');
    }
}
