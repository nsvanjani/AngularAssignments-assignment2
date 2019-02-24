import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent  {
  @Input() items = [];
  newItem = '';
  @Output()itemAddedEvent = new EventEmitter<String>();

  constructor() { }

  onAddItemClick(){
    this.itemAddedEvent.emit(this.newItem);
    console.log('items from cartComponent'+ this.items);
  }
}
