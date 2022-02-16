import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GESTION_ROUTES } from '../../constants';
import { ApiClass, Provider, ResponseHandler } from '../../schema';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends ApiClass {

  constructor(private http: HttpClient) {
    super()
  }

  getProviders(): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<Provider[]>(GESTION_ROUTES.PROVIDERS, { headers: this.headers })
      .pipe(
        map(r => {
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }

  getProviderById(id: number): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<Provider[]>(GESTION_ROUTES.PROVIDERS + '/' + id, { headers: this.headers })
      .pipe(
        map(r => {
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }

  createProvider(value: Provider): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.post<any>(GESTION_ROUTES.PROVIDERS, value, { headers: this.headers })
      .pipe(
        map(r => {
          response.data = r;
          response.status = HttpStatusCode.Ok
          return response;
        }),
        catchError(this.error)
      );
  }

  updateProvider(id: number, value: Provider): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.put<any>(GESTION_ROUTES.PROVIDERS + '/' + id, value, { headers: this.headers })
      .pipe(
        map(r => {
          response.data = r;
          response.status = HttpStatusCode.Ok
          return response;
        }),
        catchError(this.error)
      );
  }

  deleteProvider(id: number): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.delete<any>(GESTION_ROUTES.PROVIDERS + '/' + id, { headers: this.headers })
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