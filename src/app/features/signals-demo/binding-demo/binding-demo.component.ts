import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  standalone: true,
  template: `
    <h2>Binding Demo</h2>
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `
})
export class BindingDemoComponent {
  count = signal(0);

  increment() {
    this.count.update(c => c + 1);
  }

  decrement() {
    this.count.update(c => c - 1);
  }
}
