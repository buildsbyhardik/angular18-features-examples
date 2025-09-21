import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway-demo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Two-way binding with signals</h3>
    <input [(ngModel)]="user().name" placeholder="Name">
    <input type="number" [(ngModel)]="user().age" placeholder="Age">
    <p>{{ user().name }} - {{ user().age }}</p>
  `
})
export class TwoWayDemoComponent {
  user = signal({ name: '', age: 0 });
}
