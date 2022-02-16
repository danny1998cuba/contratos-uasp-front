import { HttpStatusCode } from "@angular/common/http"

export class ResponseHandler {
    error: boolean = false
    msg: string = ''
    status: HttpStatusCode = HttpStatusCode.Ok
    data?: any
  
    constructor(error?: boolean, msg?: string, status?: HttpStatusCode, data?: any) {
      if (error)
        this.error = error
      if (msg)
        this.msg = msg
      if (status)
        this.status = status
      if (data)
        this.data = data
    }
  }
  
