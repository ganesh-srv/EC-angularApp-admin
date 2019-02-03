import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.auth.isLoggednIn())) {
      return true;
    } else {
      this.myRoute.navigate(['login']);
      return false;
    }
    return true;
  }
  constructor(private auth: AuthService,
    private myRoute: Router) {

  }
}
