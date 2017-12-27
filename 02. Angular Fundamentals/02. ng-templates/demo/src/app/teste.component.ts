import { Component } from '@angular/core';

@Component({
    selector: 'app-teste',
    template: `
    
                <h2>Demo c/ template - {{getTitle()}}</h2>
                <p>Obtendo dados de uma variável: {{variavel}}</p>
    `
})
export class TesteComponent {
    private variavel: string;
    
    constructor() {
        this.variavel = 'Conteúdo da variável';
    }

    getTitle(){
        return 'XPTO';
    }
}