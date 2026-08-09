import { Component, inject, OnInit } from '@angular/core';
import { TodosStore } from '../../store/todo-store/todo.state';
import { TodoListDisplay } from '../todo-list-display/todo-list-display';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-todo-list',
  imports: [TodoListDisplay, MatProgressSpinnerModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList implements OnInit {
  protected store = inject(TodosStore);

  ngOnInit() {
    this.loadTodos()
    .then(() => console.log("Todos Loades!"));
  }

  private async loadTodos() {
    await this.store.loadAll();
  }
}
