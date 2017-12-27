import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TesteComponent } from './teste.component';
import {NomeService} from './nomes.service';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
