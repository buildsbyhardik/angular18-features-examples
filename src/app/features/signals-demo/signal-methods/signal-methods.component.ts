import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal-methods',
  standalone: true,
  template: `
    <p>User: {{ user().name }} ({{ user().age }})</p>
    <button (click)="updateUser()">Update Age</button>
    <button (click)="renameUser()">Rename</button>
  `
})
export class SignalMethodsComponent {
  user = signal({ name: 'Hardik', age: 30 });

  constructor() {
    effect(() => {
      console.log('User changed:', this.user());
    });
  }

  updateUser() {
    this.user.update(u => ({ ...u, age: u.age + 1 })); // immutable update
  }

  renameUser() {
    this.user.update(u => ({ ...u, name: 'Mutated' })); // replaces mutate
  }
}
