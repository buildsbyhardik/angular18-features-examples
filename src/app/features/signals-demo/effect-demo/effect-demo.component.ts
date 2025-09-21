import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-effect-demo',
  standalone: true,
  template: `
    <h3>Effect Demo</h3>
    <p>Count: {{ count() }}</p>
<button (click)="increment()">Increment</button>

  `
})
export class EffectDemoComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log('Effect triggered, count is:', this.count());
    });
  }
  increment() {
  this.count.update(c => c + 1);
}

}
