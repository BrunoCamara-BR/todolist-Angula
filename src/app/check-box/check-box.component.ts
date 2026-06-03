import { Component, EventEmitter, Output, Input, input } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-check-box',
  imports: [],
  template: `<input
    type="checkbox"
    (change)="emitCheck()"
    class="check"
    [checked]="checked"
  /> `,
  styleUrl: './check-box.component.css',
})
export class CheckBoxComponent {
  @Output() checkbox = new EventEmitter();
  emitCheck() {
    this.checkbox.emit();
  }
  @Input() checked = false;
}
