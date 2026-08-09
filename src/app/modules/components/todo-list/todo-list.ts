import { Component, inject, OnInit } from '@angular/core';
import { TodosStore } from '../../store/todo-store/todo.state';
import { TodoListDisplay } from '../todo-list-display/todo-list-display';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [
    TodoListDisplay,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList implements OnInit {
  protected store = inject(TodosStore);
  private router = inject(Router);

  ngOnInit() {
    this.loadTodos()
    .then(() => console.log("Todo List Loaded!"));
  }

  private async loadTodos() {
    await this.store.loadAll();
  }

  protected goToGroupList() {
    this.router.navigate([""]);
  }
}
