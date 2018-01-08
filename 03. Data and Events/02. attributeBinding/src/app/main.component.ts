import {Component} from '@angular/core';

@Component({
    selector:'app-main',
    template:`
        <table>
            <tr>
            <!--<td [colspan]="colSpan">NÃO FUNFA</td>-->
                <td [attr.colspan]="colSpan">FUNFA</td>
            </tr>
        </table>
    `
})
export class MainComponent{
    colSpan = 2;
}

/*
    Para usar o property bindind é necessário que o atributo seja uma propriedade do DOM, o que não ocorre com o ColSpan
    
 */

