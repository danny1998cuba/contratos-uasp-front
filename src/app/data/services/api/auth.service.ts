import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LOGIN_ROUTES, STORAGE_KEYS } from '../../constants';
import { ApiClass, ResponseHandler } from '../../schema';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiClass {

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookies: CookieService
  ) {
    super()
  }

  login(username: string, password: string): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.post<any>(LOGIN_ROUTES.LOGIN,
      { username: username, password: password },
      { headers: this.headers })
      .pipe(
        map(r => {
          response.msg = "Autenticado con exito"
          response.status = HttpStatusCode.Ok

          this.cookies.set(STORAGE_KEYS.SESSIONID, r.msg)
          this.getUser().subscribe()

          return response;
        }),
        catchError(this.error)
      );
  }

  logout(): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<any>(LOGIN_ROUTES.LOGOUT,
      { headers: this.headers, withCredentials: true })
      .pipe(
        map(r => {
          this.cookies.delete(STORAGE_KEYS.SESSIONID)
          localStorage.removeItem(STORAGE_KEYS.USER)

          response.msg = "Sesion cerrada con exito"
          response.status = HttpStatusCode.Ok

          this.router.navigateByUrl('/login')

          return response;
        }),
        catchError(this.error)
      );
  }

  getUser(): Observable<ResponseHandler> {
    console.log('en user')
    const response = new ResponseHandler()
    return this.http.get<any>(LOGIN_ROUTES.ACTIVE_USER,
      { headers: this.headers, withCredentials: true })
      .pipe(
        map(r => {
          console.log('hice request')
          response.msg = "Usuario"
          response.data = r;
          response.status = HttpStatusCode.Ok

          this.setUserToLS(r)

          if (!response.error) {
            this.router.navigateByUrl('/home')
          }
          return response;
        }),
        catchError(this.error)
      );
  }

  private setUserToLS(data: any) {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(data))
  }
}
