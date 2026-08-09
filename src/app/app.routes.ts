import { Routes } from '@angular/router';
import { GroupList } from './modules/components/group-list/group-list';
import { TodoList } from './modules/components/todo-list/todo-list';

export const routes: Routes = [
    { path:"", component: GroupList },
    { path: "todo-list", component: TodoList }
];
