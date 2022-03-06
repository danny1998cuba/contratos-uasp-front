import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/data/services/api';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private cookies: CookieService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('encuentro el cookie: ' + this.cookies.get('JSESSIONID'))

    if (this.cookies.get('JSESSIONID')) {
      return true;
    }

    this.router.navigate(['/login'], {
      queryParams: { returnUrl: state.url }
    })
    return false
  }

}
