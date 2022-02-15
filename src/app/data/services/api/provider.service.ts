import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Provider } from '../../schema';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private url: string = environment.uri + 'api/proveedor';
  private headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Authorization':'Basic YWRtaW46MTIz',
    'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT',
    'Access-Control-Allow-Headers':'Origin,Content-Type,append,delete,entries,foreach,get,has,keys,set,values,Authorization'
  })


  constructor(
    private httpClient: HttpClient
  ) { }

  getProviders(): Observable<Provider[]> {
    return this.httpClient.get<Provider[]>(this.url, {headers:this.headers}).pipe(
      map(response => response)
    )
  }
}
