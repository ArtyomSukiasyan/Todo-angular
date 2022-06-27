import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text: string = '';
  id: number = 1;
  todos: any = [];
  constructor() {}

  changeText(e: Event): void {
    const event = e.target as HTMLInputElement;
    this.text = event.value;
  }

  addTodo(): void {
    const todo = { id: this.id, text: this.text };
    this.todos.push(todo);
    this.text = '';
    this.id++;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((el: any) => el.id !== id);
  }
}
