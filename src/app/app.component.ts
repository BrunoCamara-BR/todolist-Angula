import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { DialogComponent } from './dialog/dialog.component';
import { Priority, Task } from '../interfaces/Task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  imports: [
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

  dialogMode: 'add' | 'edit' = 'add';

  dialogAdd() {
    this.dialogMode = 'add';
    this.blankTask = this.createBlankTask();
    this.isDialogOpen = true;
  }

  blankTask: Task = this.createBlankTask();

  createBlankTask(): Task {
    return {
      title: '',
      id: -1,
      priority: Priority.LOW,
      description: '',
      finished: null,
    };
  }

  tasks: Task[] = [];

  addTask(task: Task) {
    if (this.dialogMode === 'add') {
      this.tasks = this.taskService.addTask(task);
    }

    if (this.dialogMode === 'edit') {
      this.tasks = this.taskService.updateTask(task);
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

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }
}
