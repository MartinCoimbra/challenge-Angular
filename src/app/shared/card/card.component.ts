import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [],
})
export default class CardComponent {
  @Input() itemCard: any = {};

  constructor() {
    console.log(this.itemCard);
  }
}
