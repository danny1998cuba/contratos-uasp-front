import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GESTION_ROUTES } from '../../constants';
import { ApiClass, ResponseHandler, Rol, User } from '../../schema';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass {

  constructor(private http: HttpClient) {
    super()
  }

  getUsers(): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<User[]>(GESTION_ROUTES.USERS, { headers: this.headers, withCredentials: true })
      .pipe(
        map(r => {
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }

  getRoles(): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<Rol[]>(GESTION_ROUTES.ROLES, { headers: this.headers, withCredentials: true })
      .pipe(
        map(r => {
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }

  getUserById(id: number): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<User[]>(GESTION_ROUTES.USERS + '/' + id, { headers: this.headers, withCredentials: true })
      .pipe(
        map(r => {
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }

  createUser(value: User): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.post<any>(GESTION_ROUTES.USERS, value, { headers: this.headers, withCredentials: true })
      .pipe(
        map(r => {
          response.data = r;
          response.status = HttpStatusCode.Created
          return response;
        }),
        catchError(this.error)
      );
  }

  updateUser(id: number, value: User): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.put<any>(GESTION_ROUTES.USERS + '/' + id, value, { headers: this.headers, withCredentials: true })
      .pipe(
        map(r => {
          response.data = r;
          response.status = HttpStatusCode.Ok
          return response;
        }),
        catchError(this.error)
      );
  }

  deleteUser(id: number): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.delete<any>(GESTION_ROUTES.USERS + '/' + id, { headers: this.headers, withCredentials: true })
      .pipe(
        map(r => {
          response.data = r;
          response.status = HttpStatusCode.Ok
          return response;
        }),
        catchError(this.error)
      );
  }

}
