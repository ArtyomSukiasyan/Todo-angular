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

  changeText(e: any): void {
    this.text = e.target.value;
  }

  addTodo(): void {
    this.todos.push(this.text);
    this.text = '';
  }
}
