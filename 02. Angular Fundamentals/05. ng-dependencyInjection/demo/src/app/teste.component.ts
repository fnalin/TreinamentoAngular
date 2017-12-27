import { Component } from '@angular/core';
import {NomeService} from './nomes.service';

@Component({
    selector: 'app-teste',
    template: `
    
                <h2>Demo c/ template - {{getTitle()}}</h2>
                <p>Obtendo dados de uma variável: {{variavel}}</p>
                <h3>Iterando um array de nomes:</h3>
                <ul>
                    <li li *ngFor="let nome of nomes">
                        {{ nome }}
                    </li>
                </ul>
    `
})
export class TesteComponent {
    private variavel: string;
    private nomes: string[];
    constructor(private service: NomeService) {
        this.variavel = 'Conteúdo da variável';
        
        this.nomes = service.getNomes();
    }

    getTitle(){
        return 'XPTO';
    }
}