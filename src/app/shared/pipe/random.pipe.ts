import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random',
  standalone: true,
})
export class RandomPipe implements PipeTransform {
  greetings = [
    { part1: 'Hello ', part2: ' the greatest' },
    { part1: 'Hey ', part2: ', this will be a beautiful day' },
    { part1: 'Cheers ', part2: ', you rock!' },
  ];

  public transform(value: string): string {
    const elementRandom =
      this.greetings[Math.floor(Math.random() * this.greetings.length)];

    return elementRandom.part1 + value + elementRandom.part2;
  }
}
