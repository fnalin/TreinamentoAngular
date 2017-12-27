import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { Demo2ComponentComponent } from './demo2-component/demo2-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
