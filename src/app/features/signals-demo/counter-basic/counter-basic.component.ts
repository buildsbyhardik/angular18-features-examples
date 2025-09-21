// counter-basic.component.ts (example)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-basic',
  standalone: true,
  template: `
    <p>Current count: {{ count() }}</p>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `
})
export class CounterBasicComponent {
  count = signal(0);

  increment() {
    this.count.update(c => c + 1); // safe inside TS
  }

  decrement() {
    this.count.update(c => c - 1);
  }
}
