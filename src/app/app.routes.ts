import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ListOfTodoListComponent } from './pages/list-of-todo-list/list-of-todo-list.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

export const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'list-of-todo-list', component: ListOfTodoListComponent },
  { path: 'todo-list/:listId', component: TodoListComponent },
  // { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: '', redirectTo: 'list-of-todo-list', pathMatch: 'full' },
];
