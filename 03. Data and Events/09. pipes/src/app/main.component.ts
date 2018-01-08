import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: `
        {{ course.title | uppercase | lowercase }} <br>
        {{ course.students | number }} <br>
        {{ course.rating | number:'2.1-2' }} <br>
        {{ course.price | currency:'R':'code':'3.2-3' }} <br>
        {{ course.price | currency:'R':'symbol':'3.2-3' }} <br>
        {{ course.price | currency:'R':'symbol-narrow':'3.3-4' }} <br>
        {{ course.releaseDate | date:'shortDate' }} <br>
    `
})
export class MainComponent {
    course = {
        title: "The complete Angular course",
        rating: 4.9745,
        stuents: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };

}

/*
    Bult-in Pipes:
        - Uppercase
        - Lowercase
        - Decimal
        - Currency
        - Percent

        https://angular.io/guide/pipes
*/
