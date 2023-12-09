import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserRoles } from '../types/user.interface';

export const roleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const allowedRoles = route.data['roles'] as Array<UserRoles | undefined>;
  if (allowedRoles.includes(inject(AuthService).getRole())) {
    return true;
  } else {
    console.error(`Not enough role :(`);
    alert('Not enough role :( !');
    // return createUrlTreeFromSnapshot(route, ['/', 'login-page']);
    return false;
  }
};
