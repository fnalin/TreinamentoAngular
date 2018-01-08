import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent]
})
export class AppModule { }
