import { Component } from '@angular/core';
import { IToDo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  id: number = 1;
  text: string = '';
  todos: IToDo[] = [];
  completedTodos: IToDo[] = [];
  editedId: number = 0;
  constructor() {}

  changeText(e: Event): void {
    const event = e.target as HTMLInputElement;
    this.text = event.value;
  }

  addTodo(): void {
    const todo: IToDo = { id: this.id, text: this.text };
    this.todos.push(todo);
    this.text = '';
    this.id++;
  }

  completeTodo(id: number, text: string): void {
    const todo: IToDo = { id, text };
    this.completedTodos.push(todo);
    this.deleteTodo(id);
  }

  editTodo(id: number, text: string): void {
    this.editedId = id;
    this.text = text;
  }

  addEditedTodo(): void {
    const todo: IToDo = { id: this.editedId, text: this.text };
    this.deleteTodo(this.editedId);
    this.todos.push(todo);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((el: IToDo) => el.id !== id);
  }
}
