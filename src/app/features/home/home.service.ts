import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  public getItems() {
    return [
      {
        type: 'product',
        title: 'Mirror',
        description:
          'Indoor or outdoor, small or large mirrors, we have a style to suit your space. Discover our online mirror shop, with free uruguay delivery!',
        image:
          'https://www.latercera.com/resizer/nq-951l4MMncuwzu2w41tlsI3co=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/O2AY5LACEFF33JWYQHNNLZYTVU.jpg',
        price: 29,
      },
      {
        type: 'post',
        title: 'Filosofia',
        author: 'Martin Coimbra',
        image: 'https://m.media-amazon.com/images/I/61UPkaH3ssS._AC_SX425_.jpg',
        description: `Si soy vegano y me muerdo la lengua... ya no soy vegano?`,
        publishedDate: new Date('04-24-2023'),
      },
      {
        type: 'quote',
        author: 'Marcus Tullius Cicero',
        description: `If you have a garden and a library, you have everything you need.`,
      },
    ]
  }
}
