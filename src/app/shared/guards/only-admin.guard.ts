import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectRole } from '../../store/user/user.selector';
import { map, take } from 'rxjs/operators';
import { Role } from '../../store/shared/enums/role.enum';

@Injectable({
  providedIn: 'root'
})
export class OnlyAdminGuard implements CanActivate {

  constructor(private readonly store: Store) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectRole)
      .pipe(
        take(1),
        map((role) => role === Role.Admin)
      );
  }
}
