import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LOGIN_ROUTES } from '../../constants';
import { ApiClass, ResponseHandler, User } from '../../schema';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiClass {

  public nameUserLS = 'currentUser'
  public sessionIdLS = 'JSESSIONID'

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookies: CookieService
  ) {
    super()
  }

  get getUserFromLS(): User | undefined {
    const item = localStorage.getItem(this.nameUserLS)
    if (item)
      return JSON.parse(item)
    else
      return undefined
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

          if (!response.error) {
            this.router.navigateByUrl('/home')
          }
          return response;
        }),
        catchError(this.error)
      );
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

          this.cookies.set(this.sessionIdLS, r.msg)
          this.router.navigateByUrl('/home')

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
          response.msg = "Sesion cerrada con exito"
          response.data = r;
          response.status = HttpStatusCode.Ok

          this.cookies.delete(this.sessionIdLS)

          if (!response.error) {
            this.router.navigateByUrl('/login')
          }
          return response;
        }),
        catchError(this.error)
      );

  }

  private setUserToLS(data: any) {
    localStorage.setItem(this.nameUserLS, JSON.stringify(data))
  }
}
