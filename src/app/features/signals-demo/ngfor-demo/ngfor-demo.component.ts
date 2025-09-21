import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngfor-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>*ngFor with signals</h3>
    <ul>
      <li *ngFor="let item of items()">{{ item }}</li>
    </ul>
    <button (click)="add()">Add Item</button>
  `
})
export class NgForDemoComponent {
  items = signal(['One', 'Two']);
  add() { this.items.update(arr => [...arr, `New-${arr.length + 1}`]); }
}
