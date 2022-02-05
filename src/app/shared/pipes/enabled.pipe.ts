import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enabled'
})
export class EnabledPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Habilitado' : 'Deshabilitado';
  }

}
