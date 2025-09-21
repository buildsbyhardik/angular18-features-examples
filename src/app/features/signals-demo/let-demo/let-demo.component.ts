import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-let-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>let in *ngIf</h3>
    <div *ngIf="selected() as s">
      Selected: {{ s }}
    </div>
    <button (click)="setSelected()">Select Item</button>
  `
})
export class LetDemoComponent {
  selected = signal<string | null>(null);
  setSelected() { this.selected.set('Hardik'); }
}
