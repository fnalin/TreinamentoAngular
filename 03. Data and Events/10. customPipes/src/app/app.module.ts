import { MainComponent } from './main.component';
import { SummaryPipe } from './summary.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    imports: [BrowserModule],
    declarations: [MainComponent, SummaryPipe],
    bootstrap: [MainComponent]
})
export class AppModule { }
