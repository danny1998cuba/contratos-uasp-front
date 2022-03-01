import { JsonPipe } from '@angular/common';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CONNECTORS, FILTERS, GESTION_ROUTES } from '../../constants';
import { IContractFilters } from '../../interfaces';
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

  getContratosFiltered(filters: IContractFilters): Observable<ResponseHandler> {
    const response = new ResponseHandler()
    return this.http.get<Contrato[]>(this.processFilters(filters), { headers: this.headers })
      .pipe(
        map(r => {
          response.data = r
          return response;
        }),
        catchError(this.error)
      );
  }

  processFilters(filters: IContractFilters): string {
    var apiRoute = GESTION_ROUTES.CONTRATO

    if (filters && JSON.stringify(filters) != '{}') {
      apiRoute += CONNECTORS.PARAMS
      if (filters.provId != undefined) {
        if (!apiRoute.endsWith(CONNECTORS.PARAMS)) {
          apiRoute += CONNECTORS.AND
        }
        apiRoute += FILTERS.PROV + filters.provId
      }
      if (filters.dict != undefined) {
        if (!apiRoute.endsWith(CONNECTORS.PARAMS)) {
          apiRoute += CONNECTORS.AND
        }
        apiRoute += FILTERS.DICT + filters.dict
      }
      if (filters.aprob != undefined) {
        if (!apiRoute.endsWith(CONNECTORS.PARAMS)) {
          apiRoute += CONNECTORS.AND
        }
        apiRoute += FILTERS.APROB + filters.aprob
      }
      if (filters.vig != undefined) {
        if (!apiRoute.endsWith(CONNECTORS.PARAMS)) {
          apiRoute += CONNECTORS.AND
        }
        apiRoute += FILTERS.VIG + filters.vig
      }
      if (filters.x_venc != undefined) {
        if (!apiRoute.endsWith(CONNECTORS.PARAMS)) {
          apiRoute += CONNECTORS.AND
        }
        apiRoute += FILTERS.X_VENC + filters.x_venc
      }
      if (filters.year != undefined) {
        if (!apiRoute.endsWith(CONNECTORS.PARAMS)) {
          apiRoute += CONNECTORS.AND
        }
        apiRoute += FILTERS.YEAR + filters.year
      }
    }

    return apiRoute;
  }

}
