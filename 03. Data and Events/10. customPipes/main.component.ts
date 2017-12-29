import { Component } from '@angular/core';

@Component({
    selector: 'xpto',
    template: `
        {{ text: summary:10 }} <br>
        <!--{{ text: summary:10:param2:param3:etc }} <br>-->
    `
})
export class XPTOComponent {
    text = `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum neque dapibus eros faucibus, eu lacinia eros lacinia. Sed tincidunt mi at urna pharetra fringilla. Maecenas ac nibh massa. Proin consequat orci id tempus dapibus. Cras accumsan nisl tincidunt odio pharetra, nec dapibus diam cursus. Proin facilisis viverra sapien, eleifend dapibus libero rhoncus sed. Proin ullamcorper vel sapien sed maximus. Nulla facilisi.
    `;

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
