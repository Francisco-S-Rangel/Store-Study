import { TodosFilter, TodoState } from "../../interfaces/todo.interface";
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { TodosService } from "../../services/todo.service";
import { computed, inject } from "@angular/core";

export const initialTodoState: TodoState = {
    todos: [],
    loading: false,
    filter: "all"
}

export const TodosStore = signalStore(
    { providedIn: "root"},
    withState(initialTodoState),
    withMethods(
        (store, todosService = inject(TodosService)) => ({
            async loadAll() {
                patchState(store, { loading: true });

                try {
                    const todos = await todosService.getTodos();
                    patchState(store, {todos});
                } finally {
                    patchState(store, { loading: false});
                }
            },
            async addTodo(todoTitle: string) {
                const todo = await todosService.addTodo({title: todoTitle, completed: false});

                patchState(store, (state) => ({
                    todos: [...state.todos, todo]
                }));
            },
            async updateTodo(id: string, completed: boolean) {
                // await todosService.updateTodo(id, completed);

                patchState(store, (state) => ({
                    todos: state.todos.map((todo) => 
                        todo.id === id ? {...todo, completed} : todo
                        )
                    })
                );
            },
            async deleteTodo(id: string) {
                // await todosService.deleteTodo(id);

                patchState(store, (state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id)
                    })
                );
            },
            updateFilter(filter: TodosFilter) {
                patchState(store, {filter});
            }
        })
    ),
    withComputed((state) => ({
        filteredTodos: computed(() => {
            const todos = state.todos();
            
            switch (state.filter()) {
                case "all":
                    return todos;
                case "pending":
                    return todos.filter((todo) => !todo.completed);
                case "completed":
                    return todos.filter((todo) => todo.completed);
            }
        })
    }))
)