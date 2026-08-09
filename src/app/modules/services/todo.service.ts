import { Injectable } from "@angular/core";
import { TODOS } from "../models/mock-data";
import { Todo } from "../interfaces/todo.interface";

@Injectable({
    providedIn: "root"
})
export class TodosService {

    async getTodos(): Promise<Todo[]> {
        await sleep(1000);
        return TODOS;
    }

    async addTodo(todo: Partial<Todo>): Promise<Todo> {
        await sleep(1000);
        return {
            id: crypto.randomUUID(),
            ...todo
        } as Todo;
    }

    // async updateTodo(id: string, completed: boolean) {
    //     await sleep(500);
    // }

    // async deleteTodo(id: string) {
    //     await sleep(500);
    // }
}

// The sleep method in this context exist in order to simulate a back-end call
// So that's why it takes a 1 second sleep(1000)
async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve));
}