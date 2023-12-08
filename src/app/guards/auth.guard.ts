import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AuthService)
    .isLoggedIn()
    .pipe(
      map((isLoggedIn: boolean) =>
        isLoggedIn
          ? true
          : createUrlTreeFromSnapshot(route, ['/', 'login-page'])
      )
    );
};
