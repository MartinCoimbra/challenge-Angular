import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styles: [],
})
export class QuoteComponent {
  @Input() data: any;

  constructor() {}
}
