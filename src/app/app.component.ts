import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { DialogComponent } from './dialog/dialog.component';
import { Priority, Task } from '../interfaces/Task';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonComponent,
    TodoContainerComponent,
    DialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todolist-angular';
  isDialogOpen = false;

  dialogMode = 'edit';

  dialogAdd() {
    this.dialogMode = 'add';
    this.isDialogOpen = true;
  }

  blankTask: Task = {
    title: '',
    id: null,
    priority: Priority.LOW,
    description: '',
    finished: null,
  };
}
