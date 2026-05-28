import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./button/button.component";
import { TodoContainerComponent } from "./todo-container/todo-container.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, TodoContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist-angular';
}
