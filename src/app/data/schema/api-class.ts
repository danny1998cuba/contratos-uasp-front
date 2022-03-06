import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { of } from "rxjs";
import { environment } from "src/environments/environment";
import { ResponseHandler } from ".";

export class ApiClass {
    public isProduction = environment.production

    public headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Access-Control-Allow-Headers': 'Origin,Content-Type,append,delete,entries,foreach,get,has,keys,set,values,Authorization'
    })

    error(error: HttpErrorResponse) {
        console.log(error)
        let response: ResponseHandler = new ResponseHandler(true)
        if (error.error instanceof ErrorEvent) {
            response.status = error.status
            response.msg = error.error.message
        } else {
            response.status = error.status
            response.msg = error.error.msg
        }

        return of(response)
    }
}
