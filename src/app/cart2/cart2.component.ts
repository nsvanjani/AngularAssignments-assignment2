import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {

  @Input() items = [];
  item: String;
  @Output() itemAddedEvent = new EventEmitter<String>();

  constructor() { }
  ngOnInit() {
  }

  onAddItemClicked(){
  this.itemAddedEvent.emit(this.item);
  console.log(this.items);
  }
}
