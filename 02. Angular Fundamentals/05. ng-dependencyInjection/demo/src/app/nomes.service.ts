import { Injectable } from '@angular/core';

//@Injectable() // só é necessário caso aja um construtor com dependências
export class NomeService {
    getNomes(){
        return ['fabiano', 'raphael', 'priscila', 'isabel'];
    }
}