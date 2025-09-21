import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngtemplate-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>ng-template with signals</h3>
    <ng-template [ngIf]="items().length === 0">
      <p>No items available</p>
    </ng-template>
    <ul>
      <li *ngFor="let i of items()">{{ i }}</li>
    </ul>
    <button (click)="clear()">Clear</button>
  `
})
export class NgTemplateDemoComponent {
  items = signal(['A', 'B']);
  clear() { this.items.set([]); }
}
