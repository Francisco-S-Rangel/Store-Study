import { Component, effect, inject, viewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { TodosStore } from '../../store/todo-store/todo.state';
import { NgStyle } from '@angular/common';
import { TodosFilter } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-list-display',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    MatListModule,
    NgStyle
  ],
  templateUrl: './todo-list-display.html',
  styleUrl: './todo-list-display.css'
})
export class TodoListDisplay {
  protected store = inject(TodosStore);
  protected filter = viewChild.required(MatButtonToggleGroup);

  constructor() {
    effect(() => {
      const filter = this.filter();
      filter.value = this.store.filter();
    })
  }

  protected async onAddTodo(input: HTMLInputElement) {
    const title: string = input.value.trim();

    if (title)
      await this.store.addTodo(input.value);

    input.value = "";
  }

  protected async onTodoToggled(event: MatSelectionListChange) {
    const option = event.options[0];
    await this.store.updateTodo(option.value, option.selected);
  }

  protected async onFilterTodo(event: MatButtonToggleChange) {
    const filter = event.value as TodosFilter;

    this.store.updateFilter(filter);
  }
  
  protected async onDeleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation();
    if (id)
      await this.store.deleteTodo(id);
  }
}
