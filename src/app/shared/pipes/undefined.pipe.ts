import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'undefined'
})
export class UndefinedPipe implements PipeTransform {

  transform(value: any): unknown {
    return value?value:'No asignado';
  }

}
