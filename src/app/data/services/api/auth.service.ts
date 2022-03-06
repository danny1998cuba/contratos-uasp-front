import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LOGIN_ROUTES } from '../../constants';
import { ApiClass, ResponseHandler, User } from '../../schema';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiClass {

  public nameUserLS = 'currentUser'

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    super()
    let item = localStorage.getItem(this.nameUserLS)
  }

  get getUserFromLS(): User | undefined {
    const item = localStorage.getItem(this.nameUserLS)
    if (item)
      return JSON.parse(item)
    else
      return undefined
  }

  get getUser(): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<any>(LOGIN_ROUTES.ACTIVE_USER,
      { headers: this.headers })
      .pipe(
        map(r => {
          response.msg = "Usuario"
          response.data = r;
          response.status = HttpStatusCode.Ok

          localStorage.removeItem(this.nameUserLS)

          if (!response.error) {
            this.router.navigateByUrl('/login')
          }
          return response;
        }),
        catchError(this.error)
      );
  }

  get existUser(): boolean {
    return localStorage.getItem(this.nameUserLS) ? true : false
  }

  login(username: string, password: string): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.post<any>(LOGIN_ROUTES.LOGIN,
      { username: username, password: password },
      { headers: this.headers })
      .pipe(
        map(r => {
          response.msg = "Autenticado con exito"
          console.log(r)
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

  logout(): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<any>(LOGIN_ROUTES.LOGOUT,
      { headers: this.headers })
      .pipe(
        map(r => {
          response.msg = "Sesion cerrada con exito"
          response.data = r;
          response.status = HttpStatusCode.Ok

          localStorage.removeItem(this.nameUserLS)

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
