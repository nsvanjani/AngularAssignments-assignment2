import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  allItems =  ['Apples', 'Bananas', 'Cherries'];
  // rootItems = ['apple','mangoes','bananas'];
  // onItemAddedEvent(newItem){
  //   this.rootItems.push(newItem);
  //   console.log(this.rootItems);
  // }

  onItemAddedEvent(newItem){
    this.allItems.push(newItem);
  }
}
