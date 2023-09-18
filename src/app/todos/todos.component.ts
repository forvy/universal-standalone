import { NgFor } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export default class TodosComponent {
  todos = signal<any[]>([]);
  todosService = inject(TodosService);

  ngOnInit() {
    this.todosService.getTodos().then(todos => {
      this.todos.set(todos);
    });
  }
}
