import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  items = this.homeService.getItems();

  constructor(private homeService: HomeService) {
    console.log(this.items)
  }

}
