import { TodoState } from "../../interfaces/todo.interface";
import { signalStore, withMethods, withState } from '@ngrx/signals';

export const initialTodoState: TodoState = {
    todos: [],
    loading: false,
    filter: "all"
}

export const TodosStore = signalStore(
    { providedIn: "root"},
    withState(initialTodoState),
    // withMethods(
    // )
)