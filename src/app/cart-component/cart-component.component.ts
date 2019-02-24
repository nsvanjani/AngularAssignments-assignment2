import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  items: Array<String> =[];

  constructor() { }

  ngOnInit() {
  }
  onAddItemClick(event){
    console.log('clicked');
  }
}
