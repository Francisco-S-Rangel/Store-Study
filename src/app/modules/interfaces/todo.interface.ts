export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export type TodosFilter = "all" | "pending" | "completed";

export interface TodoState {
    todos: Todo[];
    loading: boolean;
    filter: TodosFilter;
}