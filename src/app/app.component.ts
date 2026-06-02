import { Component, CreateComputedOptions } from '@angular/core';
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
    this.blankTask = this.CreateBlankTask();
    this.isDialogOpen = true;
  }

  blankTask: Task = this.CreateBlankTask();

  CreateBlankTask(): Task {
    return {
      title: '',
      id: 123,
      priority: Priority.LOW,
      description: '',
      finished: null,
    };
  }

  tasks: Task[] = [];

  addTask(task: Task) {
    if (this.dialogMode === 'add') {
      task.id = Date.now();
      this.tasks.push(task);
    }

    if (this.dialogMode === 'edit') {
      this.tasks = this.tasks.map((item) => {
        if (item.id === task.id) {
          return task;
        }
        return item;
      });
    }

    this.isDialogOpen = false;
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  dialogEdit(task: Task) {
    this.dialogMode = 'edit';
    this.blankTask = { ...task };
    this.isDialogOpen = true;
  }
}
