import { Component } from '@angular/core';

@Component({
    selector: 'xpto',
    template: `
        {{ course.title | uppercase | lowercase }} <br>
        {{ course.students | number }} <br>
        {{ course.rating | number:'2.1-1' }} <br>
        {{ course.price | currency:'R':true:'3.2-1' }} <br>
        {{ course.releaseDate | date:'shortDate' }} <br>
    `
})
export class XPTOComponent {
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
