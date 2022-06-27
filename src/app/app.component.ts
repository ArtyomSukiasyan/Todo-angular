import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text: string = '';
  todos: string[] = [];
  constructor() {}

  changeText(e: Event): void {
    const event = e.target as HTMLInputElement;
    this.text = event.value;
  }

  addTodo(): void {
    this.todos.push(this.text);
    this.text = '';
  }
}
