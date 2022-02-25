import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GESTION_ROUTES } from '../../constants';
import { ApiClass, Contrato, ResponseHandler } from '../../schema';

@Injectable({
  providedIn: 'root'
})
export class ContractService extends ApiClass {

  constructor(private http: HttpClient) {
    super()
  }

  getContratos(): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<Contrato[]>(GESTION_ROUTES.CONTRATO, { headers: this.headers })
      .pipe(
        map(r => {
          response.data = r
          return response;
        }),
        catchError(this.error)
      );
  }

  getContratoById(id: number): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<Contrato[]>(GESTION_ROUTES.CONTRATO + '/' + id, { headers: this.headers })
      .pipe(
        map(r => {
          response.data = r;
          return response;
        }),
        catchError(this.error)
      );
  }

  createContrato(value: Contrato): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.post<any>(GESTION_ROUTES.CONTRATO, value, { headers: this.headers })
      .pipe(
        map(r => {
          response.data = r;
          response.status = HttpStatusCode.Created
          return response;
        }),
        catchError(this.error)
      );
  }

  updateContrato(id: number, value: Contrato): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.put<any>(GESTION_ROUTES.CONTRATO + '/' + id, value, { headers: this.headers })
      .pipe(
        map(r => {
          response.data = r;
          response.status = HttpStatusCode.Ok
          return response;
        }),
        catchError(this.error)
      );
  }

  deleteContrato(id: number): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.delete<any>(GESTION_ROUTES.CONTRATO + '/' + id, { headers: this.headers })
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
