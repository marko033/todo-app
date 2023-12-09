import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';
import { IUser, UserRoles } from '../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = false;
  roleAs: UserRoles | undefined;
  user?: IUser;

  users: IUser[] = [
    {
      userName: 'Boris',
      password: 'Boris',
      role: UserRoles.Controller,
    },
    {
      userName: 'Hanka',
      password: 'Hanka',
      role: UserRoles.Executor,
    },
    {
      userName: 'Marek',
      password: 'Marek',
      role: UserRoles.Admin,
    },
  ];

  constructor(private router: Router) {}

  login(user: IUser) {
    if (
      this.users.find((users: IUser) => users.userName === user.userName)
        ?.password === user.password
    ) {
      this.isLogin = true;
      this.roleAs = this.users.find(
        (users: IUser) => users.userName === user.userName
      )?.role;
      this.user = user;
      this.router.navigate(['list-of-todo-list']);
      // return this.users.find((users: IUser) => users.userName === user.userName)
      //   ?.role;
    } else {
      console.error(`Incorrect username of password`);
      alert('Incorrect username of password!');
      // return undefined;
    }
  }

  logout() {
    this.isLogin = false;
    this.roleAs = undefined;
    this.user = undefined;
    this.router.navigate(['login-page']);
  }

  isLoggedIn() {
    return of(this.isLogin).pipe(tap((v) => console.log(v)));
  }

  getRole(): UserRoles | undefined {
    return this.roleAs;
  }
}
