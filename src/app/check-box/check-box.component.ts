import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check-box',
  imports: [],
  template: `<input type="checkbox" (change)="emitCheck()" /> `,
  styleUrl: './check-box.component.css',
})
export class CheckBoxComponent {
  @Output() checkbox = new EventEmitter();
  emitCheck() {
    this.checkbox.emit();
  }
}
