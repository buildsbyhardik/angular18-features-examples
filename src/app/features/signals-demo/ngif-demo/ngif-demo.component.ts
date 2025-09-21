import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngif-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>*ngIf with signals</h3>
    <button (click)="toggle()">Toggle Loading</button>
    <div *ngIf="loading()">Loading...</div>
    <div *ngIf="!loading()">Loaded!</div>
  `
})
export class NgIfDemoComponent {
  loading = signal(false);
  toggle() { this.loading.update(l => !l); }
}
