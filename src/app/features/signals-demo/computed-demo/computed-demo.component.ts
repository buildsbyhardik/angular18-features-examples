import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-computed-demo',
  standalone: true,
  template: `
    <h3>Computed Signal</h3>
    <p>Count: {{ count() }}</p>
    <p>Double: {{ double() }}</p>
<button (click)="increment()">Increment</button>

  `
})
export class ComputedDemoComponent {
  count = signal(2);
  double = computed(() => this.count() * 2);

  increment() {
  this.count.update(c => c + 1);
}

}
