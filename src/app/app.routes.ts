import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ListOfTodoListComponent } from './pages/list-of-todo-list/list-of-todo-list.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { authGuard } from './guards/auth.guard';
import { UserRoles } from './types/user.interface';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  {
    path: 'list-of-todo-list',
    component: ListOfTodoListComponent,
    canActivate: [authGuard, roleGuard],
    data: {
      roles: [UserRoles.Admin, UserRoles.Controller, UserRoles.Executor],
    },
  },
  {
    path: 'todo-list/:listId',
    component: TodoListComponent,
    canActivate: [authGuard, roleGuard],
    data: {
      roles: [UserRoles.Admin, UserRoles.Controller],
    },
  },
  // { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
];
