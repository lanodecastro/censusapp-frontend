import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs';

import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.authenticationService
      .isAuth()
      .pipe(
        map(result => {
          if (result) {
            return true;
          }
          this.router.navigate([''], { queryParams: { returnUrl: state.url } });
          return false;
        })
      )
  }

}