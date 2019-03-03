import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { Cart2Component } from './cart2/cart2.component';

@NgModule({
  declarations: [
    AppComponent,
    Cart2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
