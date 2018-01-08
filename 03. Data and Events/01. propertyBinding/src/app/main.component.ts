import {Component} from '@angular/core';

@Component({
    selector:'app-main',
    template:`
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2>

        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
    `
})
export class MainComponent{
    title='XPTO title';
    imageUrl = 'http://lorempixel.com/400/200';
}

/*
    Não há diferença entre usar a interpolação de string c/ os {{}}
    e o property binding, porém a interpolação é mais usada para elementos que renderização textos
    e o property binding aos demais
 */